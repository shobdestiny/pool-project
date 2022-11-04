import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import appRoutes from "./config/Routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {appRoutes.map(({ id, path, component }) => (
          <Route key={id} path={path} element={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
