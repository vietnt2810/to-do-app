import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "components/Header/Header";
import Home from "features/Home/Home";
import PrivateRoutes from "components/PrivateRoutes/PrivateRoutes";
import ProfileScreen from "features/Profile/Profile/Profile";
import ProfileUpdating from "features/Profile/ProfileUpdating/ProfileUpdating";
import Tasks from "features/Task/Tasks/Tasks";
import TaskAdding from "features/Task/TaskAdding/TaskAdding";
import CategoryAdding from "features/Task/CategoryAdding/CategoryAdding";
import TaskUpdating from "features/Task/TaskUpdating/TaskUpdating";
import { Message } from "components/StyledComponents/message";

const MainLayoutRoutes: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          <Route path="profile" element={<ProfileScreen />}>
            <Route path="edit" element={<ProfileUpdating />} />
          </Route>
          <Route path="tasks" element={<Tasks itemsPerPage={4} />}>
            <Route path="add-task" element={<TaskAdding />} />
            <Route path="add-category" element={<CategoryAdding />} />
            <Route path="edit/:taskId" element={<TaskUpdating />} />
          </Route>
        </Route>
        <Route path="*" element={<Message>404, Page not found</Message>} />
      </Routes>
    </React.Fragment>
  );
};

export default MainLayoutRoutes;
