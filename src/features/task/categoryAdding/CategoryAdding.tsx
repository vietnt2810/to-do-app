import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddCategory } from "hooks/task/categoryAdding/useAddCategory";

import {
  Overlay,
  Dialog,
  DialogHeader,
  DialogContent,
  FieldName,
  InputField,
} from "components/styledComponents/dialogForm";
import { Button, ButtonHolder } from "components/styledComponents/button";

const CategoryAdding: React.FC = () => {
  const navigate = useNavigate();

  const { addCategory } = useAddCategory();

  const [newCategory, setNewCategory] = useState({
    category_name: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory({
      ...newCategory,
      category_name: e.target.value,
    });
  };

  const handleAddButton = () => {
    if (newCategory.category_name === "") {
      alert("Category's name cannot be empty");
    } else {
      addCategory(newCategory);
      navigate("/tasks");
    }
  };

  const handleCloseButton = () => {
    navigate("/tasks");
  };

  return (
    <Overlay>
      <Dialog>
        <DialogHeader>Adding a category</DialogHeader>
        <DialogContent>
          <FieldName>Category name</FieldName>
          <InputField
            placeholder="Type something"
            name="title"
            value={newCategory.category_name}
            onChange={(e) => handleChange(e)}
          />
          <ButtonHolder>
            <Button onClick={handleCloseButton}>Close</Button>
            <Button onClick={handleAddButton}>Add</Button>
          </ButtonHolder>
        </DialogContent>
      </Dialog>
    </Overlay>
  );
};

export default CategoryAdding;
