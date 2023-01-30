import React, { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCategories } from "hooks/task/common/useGetCategories";
import { useUpdateTask } from "hooks/task/common/useUpdateTask";
import { useGetTask } from "hooks/task/taskUpdating/useGetTask";

import {
  Overlay,
  Dialog,
  DialogHeader,
  DialogContent,
  FieldName,
  InputField,
  CategorySelectField,
} from "components/styledComponents/dialogForm";
import { Message } from "components/styledComponents/message";
import { Button, ButtonHolder } from "components/styledComponents/button";

const TaskUpdating: React.FC = () => {
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { taskId } = useParams();

  const { updateTask } = useUpdateTask();

  const { categories } = useGetCategories();

  const { task, isTaskLoading, isError } = useGetTask(taskId);

  console.log(task);

  const [taskInputValue, setTaskInputValue] = useState({
    title: task?.title,
    status: task?.status,
    category_id: task?.category_id,
  });

  useEffect(() => {
    setTaskInputValue({
      title: task?.title,
      status: task?.status,
      category_id: task?.category_id,
    });
  }, [task]);

  const handleChangeInput = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setTaskInputValue({ ...taskInputValue, [name]: value });

    if (name === "category") {
      setTaskInputValue({ ...taskInputValue, category_id: Number(value) });
    }
  };

  const handleUpdateButton = () => {
    updateTask({ ...taskInputValue, id: parseInt(taskId as string) });
    navigate("/tasks");
  };

  const handleCloseButton = () => {
    queryClient.cancelQueries(["task"]);
    navigate("/tasks");
  };

  return (
    <Overlay>
      <Dialog>
        <DialogHeader>Updating a task</DialogHeader>
        <DialogContent>
          {isTaskLoading && <Message>Loading..</Message>}
          {isError && <Message>Task not found</Message>}
          {!isTaskLoading && !isError && (
            <React.Fragment>
              <FieldName>Title</FieldName>
              <InputField
                onChange={(e) => handleChangeInput(e)}
                value={taskInputValue.title}
                placeholder="Type something"
                name="title"
              />
              <FieldName>Category</FieldName>
              <CategorySelectField
                value={taskInputValue.category_id}
                onChange={(e) => handleChangeInput(e)}
                name="category"
              >
                <option></option>
                {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.category_name}
                  </option>
                ))}
              </CategorySelectField>
            </React.Fragment>
          )}
          <ButtonHolder>
            <Button onClick={handleCloseButton}>Close</Button>
            {!isTaskLoading && !isError && (
              <Button onClick={handleUpdateButton}>Update</Button>
            )}
          </ButtonHolder>
        </DialogContent>
      </Dialog>
    </Overlay>
  );
};

export default TaskUpdating;
