import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/tasks";
import Form from "./pages/tasks/Form";
import Detail from "./pages/tasks/Detail";
import Login from "./pages/Login";
import Register from "./pages/Register/Index";
import Dashboard from "./pages/dashboard";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarefas" element={<Tasks />} />
      <Route path="/tarefas/cadastro" element={<Form />} />
      <Route path="/tarefas/cadastro/:id" element={<Form />} />
      <Route path="/tarefas/:id" element={<Detail />} />
      <Route path="/api/login" element={<Login />} />
      <Route path="/api/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
