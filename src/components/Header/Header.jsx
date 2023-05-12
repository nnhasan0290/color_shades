import Switch from "./Switch";
import Values from "values.js";
import { GetGlobalContexts } from "../../utils/globalContext";
import ColorPicker from "../ColorPicker/ColorPicker";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const { setShades, shades } = GetGlobalContexts();
  console.log(shades);
  const [showPicker, togglePicker] = useState(false);
  const element = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    togglePicker(false);
    const values = new Values("#FF0000").shades(5);
    setShades(values);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      const form = element.current
      const isClickedOutside = form && !form.contains(event.target)
      if (isClickedOutside) {
        togglePicker(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <div className="heading csg-container">
      <h2 className="heading__title">Color Shade Generator</h2>
      <form ref={element} className="heading__form" onSubmit={handleSubmit}
      >
        <input
          type="text"
          className="heading__form__input"
          onFocus={() => togglePicker(true)}
          
        />
        {showPicker && (
          <div
            className="heading__form__colorPicker"
          >
            <ColorPicker />
          </div>
        )}
        <input
          type="submit"
          className="heading__form__submit"
          value={"Search"}
        />
      </form>
      <Switch />
    </div>
  );
};

export default Header;
