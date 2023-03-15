import classNames from "classnames";
import React, { useContext, useState } from "react";
import { MenuTypeProps as itemType } from "../MenuItem/menuitem";
import { MenuContext } from "../menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
interface SubMenuItemPropsType {
  index?: string;
  className?: string;
  children?: React.ReactNode;
  title?: string;
}

const SubMenuItem: React.FC<SubMenuItemPropsType> = (props) => {
  const { children, title, index } = props;
  const context = useContext(MenuContext);
  const openedSubMenus = context.defaultOpenSubMenus as string[];
  const isOpend =
    index && context.mode === "vertical"
      ? openedSubMenus.includes(index) //defaultOpenSubMenus是需要展开的index的父级序号
      : false; //是否默认打开
  const [menuOpen, setOpen] = useState(isOpend); //是否默认打开
  const classes = classNames("menu-item submenu-item", {
    "is-active": context.index === index,
    "is-opened": menuOpen,
    "is-vertical": context.mode === "vertical",
  });
  const subMenuClasses = classNames("viking-submenu", {
    "menu-opened": menuOpen,
  });

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  let timer: any;
  const handleMouse = (e: React.MouseEvent, togggle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setOpen(togggle); //横向的时候鼠标摸上去触发，做了防抖的操作
    }, 300);
  };

  const clickEvents =
    context.mode === "vertical"
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode !== "vertical"
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true);
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false);
          },
        }
      : {};

  const renderChildren = () => {
    const element = React.Children.map(children, (child, idx) => {
      const childElement = child as React.FunctionComponentElement<itemType>;
      const { displayName } = childElement.type;
      if (displayName === "MentItem") {
        return React.cloneElement(childElement, {
          index: `${index}-${idx}`,
        });
      } else {
        console.error("子标签使用错误");
      }
    });

    return <ul className={subMenuClasses}>{element}</ul>;
  };

  return (
    <li className={classes} {...hoverEvents}>
      <div className="submenu-title" {...clickEvents}>
        <FontAwesomeIcon icon={faEnvelope} />
        {title}
      </div>
      <ul>{renderChildren()}</ul>
    </li>
  );
};

SubMenuItem.displayName = "SubMenuItem";
export default SubMenuItem;
