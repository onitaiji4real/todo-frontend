"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Task } from "./ToDoTable";
import { PrioritySelect } from "./PrioritySelect";
import { DatePicker } from "./DatePicker";
import { Checkbox } from "./ui/checkbox";
import { format } from "date-fns";

export function EditToDo({ task }: { task: Task }) {
  const [editedTask, setEditedTask] = React.useState<Task>({
    ...task,
    Deadline: new Date(task.Deadline),
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [id]: value }));
  };

  const handlePriorityChange = (priority: string) => {
    setEditedTask((prevTask) => ({ ...prevTask, Priority: priority }));
  };

  const handleDateChange = (date: Date) => {
    const newDate = new Date(
      Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
    setEditedTask((prevTask) => ({
      ...prevTask,
      Deadline: newDate,
    }));
  };

  const handleStatusChange = (checked: boolean) => {
    setEditedTask((prevTask) => ({
      ...prevTask,
      isDone: checked ? 1 : 0,
    }));
  };

  const handleSave = async () => {
    const { _id, ...updatedTaskWithoutId } = {
      ...editedTask,
      Deadline: editedTask.Deadline.toISOString().split("T")[0],
    };

    console.log(updatedTaskWithoutId);

    try {
      const response = await fetch(`${process.env.BASE_URL}/todos/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTaskWithoutId),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      const result = await response.json();
      console.log("Update successful:", result);
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit task</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Task" className="text-right">
              Task
            </Label>
            <Input
              id="Task"
              value={editedTask.Task}
              onChange={handleInputChange}
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Priority" className="text-right">
              Priority
            </Label>
            <PrioritySelect
              priority={editedTask.Priority}
              onChange={handlePriorityChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Deadline" className="text-right">
              Deadline
            </Label>
            <DatePicker
              currentDate={editedTask.Deadline}
              onDateChange={handleDateChange}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="isDone" className="text-right">
              Status
            </Label>
            <div className="flex items-center space-x-2">
              <Checkbox
                checked={editedTask.isDone === 1}
                onCheckedChange={handleStatusChange}
              />
              <label
                htmlFor="isDone"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Done
              </label>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSave}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
