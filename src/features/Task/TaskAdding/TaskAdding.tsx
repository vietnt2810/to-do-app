import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddTask } from "hooks/useAddTask";
import { useGetCategories } from "hooks/useGetCategories";

import { Category } from "types/types";

import {
  Overlay,
  Dialog,
  DialogHeader,
  DialogContent,
  FieldName,
  InputField,
  CategorySelectField,
} from "components/StyledComponents/dialogForm";
import { Button, ButtonHolder } from "components/StyledComponents/button";

const TaskAdding: React.FC = () => {
  const navigate = useNavigate();

  const { categories } = useGetCategories();

  const { addTask } = useAddTask();

  const [newTask, setNewTask] = useState({
    title: "",
    categoryId: 1,
    status: false,
    userId: JSON.parse(localStorage.getItem("user") as string).id,
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setNewTask({ ...newTask, [name]: value });

    if (name === "category") {
      setNewTask({ ...newTask, categoryId: parseInt(value) });
    }
  };

  const handleAddButton = () => {
    if (newTask.title === "") {
      alert("Title cannot be empty");
    } else {
      addTask(newTask);
      navigate("/tasks");
    }
  };

  const handleCloseButton = () => {
    navigate("/tasks");
  };

  return (
    <Overlay>
      <Dialog>
        <DialogHeader>Adding a task</DialogHeader>
        <DialogContent>
          <FieldName>Title</FieldName>
          <InputField
            placeholder="Type something"
            name="title"
            value={newTask.title}
            onChange={(e) => handleChange(e)}
          />
          <FieldName>Category</FieldName>
          <CategorySelectField
            name="category"
            onChange={(e) => handleChange(e)}
          >
            {categories?.data.map((category: Category) => (
              <option key={category.id} value={category.id}>
                {category.categoryName}
              </option>
            ))}
          </CategorySelectField>
          <ButtonHolder>
            <Button onClick={handleCloseButton}>Close</Button>
            <Button onClick={handleAddButton}>Add</Button>
          </ButtonHolder>
        </DialogContent>
      </Dialog>
    </Overlay>
  );
};

export default TaskAdding;
