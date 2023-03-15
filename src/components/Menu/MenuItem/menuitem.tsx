import React, { useContext } from "react";
import classNames from "classnames";
import { MenuContext } from "../menu";

export interface MenuTypeProps {
  index?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  disabled?: boolean;
}

const MentItem: React.FC<MenuTypeProps> = (props) => {
  const { className, style, children, index, disabled } = props;
  const context = useContext(MenuContext);
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === "string") {
      context.onSelect(index);
    } else {
      alert("失败了");
    }
  };
  const classes = classNames("menu-item", className, {
    "is-disabled": disabled,
    "is-active": context.index === index,
  });

  return (
    <li style={style} className={classes} onClick={handleClick}>
      {children}
    </li>
  );
};
MentItem.displayName = "MentItem";

export default MentItem;
