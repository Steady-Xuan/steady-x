import React from "react";
import { storiesOf } from "@storybook/react";
import Menu from "./menu";
import MentItem from "./MenuItem/menuitem";
import SubMenuItem from "./SubMenuItem/SubMenuItem";

const defaultMenu = () => {
  return (
    <Menu defaultIndex="0">
      <MentItem>click 01</MentItem>
      <MentItem>click 02</MentItem>
      <MentItem>click 03</MentItem>
    </Menu>
  );
};

const defaultSubMenu = () => {
  return (
    <Menu defaultIndex="0">
      <MentItem>click 01</MentItem>
      <MentItem>click 02</MentItem>
      <MentItem>click 03</MentItem>
      <SubMenuItem title="sub 01">
        <MentItem>click 01</MentItem>
        <MentItem>click 02</MentItem>
        <MentItem>click 03</MentItem>
      </SubMenuItem>
    </Menu>
  );
};

storiesOf("Menu Component", module)
  .add("Menu", defaultMenu)
  .add("subMenu", defaultSubMenu);
