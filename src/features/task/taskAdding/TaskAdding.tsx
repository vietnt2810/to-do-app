import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddTask } from "hooks/task/taskAdding/useAddTask";
import { useGetCategories } from "hooks/task/common/useGetCategories";

import {
  Overlay,
  Dialog,
  DialogHeader,
  DialogContent,
  FieldName,
  InputField,
  CategorySelectField,
} from "components/styledComponents/dialogForm";
import { Button, ButtonHolder } from "components/styledComponents/button";
import { useAuth } from "hooks/common/useAuth";

const TaskAdding: React.FC = () => {
  const auth = useAuth();

  const navigate = useNavigate();

  const { categories } = useGetCategories();

  const { addTask } = useAddTask();

  const [newTask, setNewTask] = useState({
    title: "",
    category_id: 0,
    status: false,
    user_id: Number(auth.user?.id),
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setNewTask({ ...newTask, [name]: value });

    if (name === "category") {
      setNewTask({ ...newTask, category_id: parseInt(value) });
    }
  };

  const handleAddButton = () => {
    if (newTask.title === "" || newTask.category_id === 0) {
      alert("Please fill in information for the new task");
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
            <option></option>
            {categories?.map((category) => (
              <option key={category.id} value={category.id}>
                {category.category_name}
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
