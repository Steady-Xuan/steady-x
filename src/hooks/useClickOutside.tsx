import { RefObject, useEffect } from "react";

function useClickOutside(ref: RefObject<HTMLElement>, handlerfun: Function) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handlerfun(event);
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, [ref, handlerfun]);
}
export default useClickOutside;
