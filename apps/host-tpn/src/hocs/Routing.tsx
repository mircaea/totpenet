import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "../routes/Landing";
import Layout from "./Layout";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}

export default Routing;
