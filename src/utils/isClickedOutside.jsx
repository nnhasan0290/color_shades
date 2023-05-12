import { useEffect } from "react";

function useOutsideClickHandler(ref, callback) {

  useEffect(() => {
    function handleClickOutside(event) {
      const element = ref.current;
      const isClickedOutside = element && !element.contains(event.target);
      if (isClickedOutside) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}

export default useOutsideClickHandler;
