import Switch from "./Switch";
import { GetGlobalContexts } from "../../utils/globalContext";
import ColorPicker from "../ColorPicker/ColorPicker";
import { useEffect, useRef, useState } from "react";
import useOutsideClickHandler from "../../utils/isClickedOutside";

const Header = () => {
  const [showPicker, togglePicker] = useState(false);
  const [query, setQuery] = useState(false);
  const { color, setColor } = GetGlobalContexts();

  const handleOutsideClick = () => {
    togglePicker(false);
  };

  const element = useRef(null);
  useOutsideClickHandler(element, handleOutsideClick);

  const handleSubmit = (e) => {
    e.preventDefault();
    togglePicker(false);
    setColor(query);
  };

  useEffect(() => {
    setQuery(color);
  }, [color]);

  return (
    <div className="heading csg-container">
      <h2 className="heading__title">Color Shade Generator</h2>
      <form ref={element} className="heading__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="heading__form__input"
          onFocus={() => togglePicker(true)}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {showPicker && (
          <div className="heading__form__colorPicker">
            <ColorPicker formSubmit={handleSubmit} />
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
