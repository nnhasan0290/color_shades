import { GetGlobalContexts } from "../../utils/globalContext";

const Switch = () => {
  //global contexts
  const { setH2l, h2l } = GetGlobalContexts();
  
  return (
    <div className="filter">
      <span>High &rarr; Low</span>

      <label className="filter__switch">
        {/* hidden checkbox to control the button */}
        <input
          className="filter__switch__checkbox"
          type="checkbox"
          onChange={() => setH2l(!h2l)}
        />
        <span className="filter__switch__slider"></span>
      </label>
    </div>
  );
};

export default Switch;
