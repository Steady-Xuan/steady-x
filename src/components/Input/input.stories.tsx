import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./input";

const ControlledInput = () => {
  const [value, setValue] = useState();
  return (
    <Input
      value={value}
      defaultValue={value}
      onChange={(e: any) => {
        setValue(e.target.value);
      }}
    ></Input>
  );
};

const defaultInput = () => {
  return (
    <>
      <Input
        style={{ width: "300px" }}
        placeholder="placeholder"
        onChange={action("changed")}
      ></Input>
      <ControlledInput />
    </>
  );
};
const disabledInput = () => (
  <Input style={{ width: "300px" }} placeholder="disabled input" disabled />
);
const iconInput = () => {
  return (
    <Input style={{ width: "300px" }} placeholder="placeholder" icon="search" />
  );
};

const sizeInput = () => (
  <>
    <Input style={{ width: "300px" }} defaultValue="large size" size="lg" />
    <Input style={{ width: "300px" }} placeholder="small size" size="sm" />
  </>
);

const pandInput = () => {
  return (
    <>
      <Input
        style={{ width: "300px" }}
        defaultValue="prepend text"
        prepend="https://"
      ></Input>

      <Input
        style={{ width: "300px" }}
        defaultValue="google"
        append=".com"
      ></Input>
    </>
  );
};

storiesOf("Input Component", module)
  .add("Input", defaultInput)
  .add("被禁用的Input", disabledInput)
  .add("带图标的Input", iconInput)
  .add("大小不同的Input", sizeInput)
  .add("带后缀的Input", pandInput);
