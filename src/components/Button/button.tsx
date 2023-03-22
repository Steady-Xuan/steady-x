import React from "react";
import classNames from "classnames";
export enum ButtonSize {
  Large = "lg",
  Small = "sm",
}

export enum ButtonType {
  Primary = "primary",
  Default = "default",
  Danger = "danger",
  Link = "link",
}

interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  /**
   * 大小
   */
  size?: ButtonSize;
  btnType: ButtonType;
  children: React.ReactNode;
  href?: string;
}

type ButtonToPropsAnchor = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonToProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonAnchor = ButtonToPropsAnchor & ButtonToProps;
//partial 把全部属性变成可选的
type ToPropsAttributes = Partial<BaseButtonProps & ButtonAnchor>;
const Button: React.FC<ToPropsAttributes> = (props) => {
  const { className, disabled, size, btnType, children, href, ...otherProps } =
    props;

  if (btnType === ButtonType.Link && href) {
    return (
      <a
        href={href}
        className={classNames("btn", className, {
          [`btn-${btnType}`]: btnType,
          [`btn-${size}`]: size,
        })}
        {...otherProps}
      >
        {children}
      </a>
    );
  } else {
    return (
      <button
        disabled={disabled}
        className={classNames("btn", className, {
          [`btn-${btnType}`]: btnType,
          [`btn-${size}`]: size,
        })}
        {...otherProps}
      >
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
