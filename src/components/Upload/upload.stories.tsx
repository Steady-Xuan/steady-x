import React from "react";
import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Upload from "./upload";

import Icon from "../Icon/index";

const SimpleUpload = () => {
  return (
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={action("changed")}
      onRemove={action("removed")}
      name="fileName"
      multiple
      drag
    >
      <Icon
        icon="upload"
        size="5x"
        theme="secondary"
      ></Icon>
      <br />
      <p>Drag file over to upload</p>
    </Upload>
  );
};

storiesOf("Upload Component", module).add("Upload", SimpleUpload);
