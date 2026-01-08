import App from "fusion-react";
import React from "react";
import Root from "./components/root";
import HelmetPlugin from "fusion-plugin-react-helmet-async";
import TodosPlugin from "./plugins/todos";

export default async function start() {
  const app = new App(Root);
  app.register(HelmetPlugin);
  app.middleware(require("koa-bodyparser")());
  if (__NODE__) {
    app.middleware(TodosPlugin);
  }
  return app;
}
