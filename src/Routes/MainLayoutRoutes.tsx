import React from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTE_LIST } from "./route.config";

import Header from "components/header/Header";
import Home from "features/home/Home";
import PrivateRoutes from "components/privateRoutes/PrivateRoutes";
import NotFound from "components/notFoundScreen/NotFound";

const MainLayoutRoutes: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route element={<PrivateRoutes />}>
          {ROUTE_LIST.map((route) => (
            <Route key={route.id} path={route.path} element={route.element}>
              {route.nestedRoutes?.map((nestedRoute) => (
                <Route
                  key={nestedRoute.id}
                  path={nestedRoute.path}
                  element={nestedRoute.element}
                />
              ))}
            </Route>
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
};

export default MainLayoutRoutes;
