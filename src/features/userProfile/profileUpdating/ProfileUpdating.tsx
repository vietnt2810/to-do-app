import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "hooks/common/useAuth";

import {
  Overlay,
  Dialog,
  DialogHeader,
  DialogContent,
  FieldName,
  InputField,
} from "components/styledComponents/dialogForm";
import { Button, ButtonHolder } from "components/styledComponents/button";

const ProfileUpdating: React.FC = () => {
  const navigate = useNavigate();

  const auth = useAuth();

  const [user, setUser] = useState({ username: "" });

  useEffect(() => {
    setUser({
      username: JSON.parse(localStorage.getItem("user") as string).username,
    });
  }, []);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  const handleUpdateButton = () => {
    auth?.updateUser(user);
    navigate("/profile");
  };

  const handleCloseButton = () => {
    navigate("/profile");
  };

  return (
    <Overlay>
      <Dialog>
        <DialogHeader>Updating profile</DialogHeader>
        <DialogContent>
          <FieldName>Username</FieldName>
          <InputField
            onChange={(e) => handleChangeInput(e)}
            value={user.username}
            placeholder="Type something"
            name="username"
          />
          <ButtonHolder>
            <Button onClick={handleCloseButton}>Close</Button>
            <Button onClick={handleUpdateButton}>Update</Button>
          </ButtonHolder>
        </DialogContent>
      </Dialog>
    </Overlay>
  );
};

export default ProfileUpdating;
