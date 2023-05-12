import { useState } from "react";

const Switch = () => {
  const [filterState, setFilterState] = useState(false);
  return (
    <div className="filter">
        <span>High &rarr; Low</span>

      <label className="filter__switch">
        <input
          className="filter__switch__checkbox"
          type="checkbox"
          onChange={() => setFilterState(!filterState)}
        />
        <span className="filter__switch__slider"></span>
      </label>
    </div>
  );
};

export default Switch;
