import React, {
  FC,
  ReactElement,
  InputHTMLAttributes,
  ChangeEvent,
} from "react";
// import classNames from "classnames";
// import { IconProp } from "@fortawesome/fontawesome-svg-core";
// import Icon from "../Icon";
// // type InputSize = "lg" | "sm";

// // export interface InputProps
// //   extends Omit<InputHTMLAttributes<HTMLElement>, "size"> {
// //   /**
// //    * 是否禁用 Input
// //    */
// //   disabled?: boolean;
// //   /**
// //    * 设置input大小，支持lg/sm
// //    */
// //   size?: InputSize;
// //   /**
// //    * 添加图标，在右侧悬浮添加一个图标，用于提示
// //    */
// //   icon?: IconProp;
// //   prepend?: string | ReactElement;
// //   append?: string | ReactElement;
// //   onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
// // }

export const Loading = () => {


  return (
   <div>
    <div className="cicrle-loading">
      {/* <span>loading</span> */}
    </div>
    {/* <div className="cicrle-loading-other"></div> */}
   </div>
  );
};

export default Loading;
