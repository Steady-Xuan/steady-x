import React from "react";
import classNames from "classnames";

type sizeType = "lg" | "small";

interface inputPropsType
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: sizeType;
  disabled?: boolean;
  className?: string;
}

const Input = (props: inputPropsType) => {
  const { size, disabled, className } = props;
  const classes = classNames();
  return (
    <div>
      <input type="text" className={classes} />
    </div>
  );
};

export default Input;
