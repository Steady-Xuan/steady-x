import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Button from "./button";
import { ButtonType, ButtonSize } from "./button";

const defaultButton = () => {
  return <Button onClick={action("clicked")}> default button </Button>;
};

const buttonWithSize = () => (
  <>
    <Button size={ButtonSize.Large}> large button </Button>
    <Button size={ButtonSize.Small}> small button </Button>
  </>
);

const buttonWithType = () => (
  <>
    <Button btnType={ButtonType.Primary}> primary button </Button>
    <Button btnType={ButtonType.Danger}> danger button </Button>
    <Button btnType={ButtonType.Link} href="https://google.com">
      link button
    </Button>
  </>
);

storiesOf("Button Component", module)
  .add("Button", defaultButton)
  .add("不同大小的Button", buttonWithSize)
  .add("不同类型的Button", buttonWithType);
