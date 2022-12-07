import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddCategory } from "hooks/useAddCategory";

import {
  Overlay,
  Dialog,
  DialogHeader,
  DialogContent,
  FieldName,
  InputField,
} from "components/StyledComponents/dialogForm";
import { Button, ButtonHolder } from "components/StyledComponents/button";

const CategoryAdding: React.FC = () => {
  const navigate = useNavigate();

  const { addCategory } = useAddCategory();

  const [newCategory, setNewCategory] = useState({
    categoryName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCategory({
      ...newCategory,
      categoryName: e.target.value,
    });
  };

  const handleAddButton = () => {
    if (newCategory.categoryName === "") {
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
            value={newCategory.categoryName}
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
