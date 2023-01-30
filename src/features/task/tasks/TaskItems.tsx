import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteTask } from "hooks/task/tasks/useDeleteTask";
import { useUpdateTask } from "hooks/task/common/useUpdateTask";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

import { TableContentRow, TaskButtonHolder, TaskButton } from "./tasksStyles";
import { Button } from "components/styledComponents/button";
import { Task } from "types/task.type";

const TaskItems: React.FC<{ currentItems: Task[] }> = ({ currentItems }) => {
  const navigate = useNavigate();

  const { updateTask } = useUpdateTask();

  const { deleteTask } = useDeleteTask();

  const [targetDeletingTask, setTargetDeletingTask] = useState(0);

  const [open, setOpen] = useState(false);

  const handleCheck = (
    taskId: number,
    title: string,
    category_id: number,
    taskStatus: boolean
  ) => {
    updateTask({
      id: taskId,
      title: title,
      category_id: category_id,
      status: !taskStatus,
    });
  };

  const handleUpdate = (taskId: number) => {
    navigate(`edit/${taskId}`);
  };

  const handleDelete = (taskId: number) => {
    setTargetDeletingTask(taskId);
    setOpen(true);
  };

  const handleConfirmDeleting = () => {
    deleteTask(targetDeletingTask);
    setOpen(false);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleCancelDeleting = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {currentItems?.map((task) => (
        <TableContentRow key={task.id}>
          <td>{task.title}</td>
          <td>{task.category_name}</td>
          <td>{task.status ? "Finished" : "Unfinished"}</td>
          <td>
            <TaskButtonHolder>
              <TaskButton
                onClick={() =>
                  handleCheck(
                    task.id,
                    task.title,
                    task.category_id,
                    task.status
                  )
                }
              >
                {task.status ? "❌" : "✔️"}
              </TaskButton>
              <TaskButton onClick={() => handleUpdate(task.id)}>✂</TaskButton>
              <TaskButton onClick={() => handleDelete(task.id)}>🗑️</TaskButton>
            </TaskButtonHolder>
          </td>
        </TableContentRow>
      ))}

      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Deleting a task"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you really want to delete this task?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ justifyContent: "center" }}>
          <Button onClick={handleCancelDeleting}>Cancel</Button>
          <Button onClick={handleConfirmDeleting}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default TaskItems;
