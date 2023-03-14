import React, { createContext, useState } from "react";
import classNames from "classnames";

export enum modeType {
  vertical = "vertical",
  horizontal = "horizontal",
}

interface MenuTypeProps {
  defaultIndex: number;
  mode?: modeType;
  onSelect?: (index: number) => void;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

interface MenuContext {
  index?: number;
  onSelect?: (index: number) => void;
}
//容器而已
export const MenuContext = createContext<MenuContext>({
  index: 0,
});
const Menu: React.FC<MenuTypeProps> = (props) => {
  const { defaultIndex, mode, onSelect, className, style, children } = props;
  const [idx, setIdx] = useState(defaultIndex);
  const handleClick = (index: number) => {
    setIdx(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  //传的值
  const contextValue = {
    index: idx,
    onSelect: handleClick,
  };

  const classes = classNames("viking-menu", className, {
    "menu-vertical": mode === "vertical",
    "menu-horizontal": mode !== "vertical",
  });

  return (
    <ul style={style} className={classes}>
      <MenuContext.Provider value={contextValue}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

export default Menu;
