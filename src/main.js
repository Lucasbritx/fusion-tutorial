import App from "fusion-react";
import React from "react";
import Root from "./components/root";

export default async function start() {
  const app = new App(Root);
  return app;
}
