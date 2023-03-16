import React from "react";
import { storiesOf } from "@storybook/react";

storiesOf("Welcome page", module).add("welcome", () => {
  return (
    <>
      <h1>欢迎来到steady-x组件库</h1>
      <p>steady-x 是为自己熟悉组件源码学习</p>
      <h3>让我们来试一试</h3>
      <code>npm install steady-x --save</code>
    </>
  );
});
