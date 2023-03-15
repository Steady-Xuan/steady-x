import React, { createContext, useState } from "react";
import classNames from "classnames";
import { MenuTypeProps as itemType } from "./MenuItem/menuitem";

export enum modeType {
  vertical = "vertical",
  horizontal = "horizontal",
}

interface MenuTypeProps {
  defaultIndex: string;
  mode?: modeType;
  onSelect?: (index: string) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  defaultOpenSubMenus?: string[];
}

interface MenuContextType {
  index?: string;
  onSelect?: (index: string) => void;
  mode?: modeType;
  defaultOpenSubMenus?: string[];
}
//容器而已
export const MenuContext = createContext<MenuContextType>({
  index: "0",
});
const Menu: React.FC<MenuTypeProps> = (props) => {
  const {
    defaultIndex,
    mode,
    onSelect,
    className,
    style,
    children,
    defaultOpenSubMenus,
  } = props;
  const [idx, setIdx] = useState(defaultIndex);
  const handleClick = (index: string) => {
    setIdx(index);
    alert(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  //传的值
  const contextValue = {
    index: idx,
    onSelect: handleClick,
    mode: mode,
    defaultOpenSubMenus,
  };

  const classes = classNames("viking-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  const renderChildren = () => {
    return React.Children.map(children, (child, idx) => {
      const childElement = child as React.FunctionComponentElement<itemType>;
      const { displayName } = childElement.type;

      if (
        displayName?.length &&
        (displayName === "MentItem" || displayName === "SubMenuItem")
      ) {
        return React.cloneElement(childElement, { index: idx.toString() });
      } else {
        console.error("Menu not use other element only use MentItem");
      }
    });
  };

  return (
    <ul style={style} className={classes}>
      <MenuContext.Provider value={contextValue}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
