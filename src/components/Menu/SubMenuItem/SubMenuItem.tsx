import classNames from "classnames";
import React, { useContext } from "react";
import { MenuTypeProps as itemType } from "../MenuItem/menuitem";
import { MenuContext } from "../menu";
interface SubMenuItemPropsType {
  index?: number;
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

const SubMenuItem: React.FC<SubMenuItemPropsType> = (props) => {
  const context = useContext(MenuContext);
  const { className, children, title, index } = props;
  const classes = classNames("menu-item submenu-item", {
    "is-active": context.index === index,
  });
  const subMenuClasses = classNames("viking-submenu");
  const renderChildren = () => {
    const element = React.Children.map(children, (child, idx) => {
      const childElement = child as React.FunctionComponentElement<itemType>;
      const { displayName } = childElement.type;
      if (displayName === "MentItem") {
        return React.cloneElement(childElement, { index: idx });
      } else {
        console.error("子标签使用错误");
      }
    });
    return <ul className={subMenuClasses}>{element}</ul>;
  };

  return (
    <li className={classes}>
      <div className="submenu-title">{title}</div>
      <ul>{renderChildren()}</ul>
    </li>
  );
};
SubMenuItem.displayName = "SubMenuItem";
export default SubMenuItem;
