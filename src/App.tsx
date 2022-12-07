import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "hooks/useAuth";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainLayoutRoutes from "Routes/MainLayoutRoutes";

import Login from "features/Auth/Login/Login";
import SignUp from "features/Auth/SignUp/SignUp";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  const auth = useAuth();

  useEffect(() => {
    auth?.loadUser();
  }, []);

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="*" element={<MainLayoutRoutes />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
