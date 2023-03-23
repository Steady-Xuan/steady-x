import React, { FC } from "react";
import Menu, { MenuTypeProps } from "./menu";
import MentItem from "./MenuItem/menuitem";
import SubMenuItem from "./SubMenuItem/SubMenuItem";

type NewMenuType = FC<MenuTypeProps> & {
  item: FC<MenuTypeProps>;
  SubMenu: FC<MenuTypeProps>;
};

const NewMenu = Menu as NewMenuType;

NewMenu.item = MentItem;
NewMenu.SubMenu = SubMenuItem;

export default NewMenu;
