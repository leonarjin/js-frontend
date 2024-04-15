import React from "react";
import { BrowserRouter } from "react-router-dom";

import AppRoutes from "./routes";
import Header from "./components/header";

function App(){
  return(
  <BrowserRouter>
  <Header />
  <AppRoutes />
  </BrowserRouter>
  );
}

export default App;