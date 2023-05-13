import { GetGlobalContexts } from "../../utils/globalContext";
//divider between header and body
const Divider = () => {
  const { color } = GetGlobalContexts();
  return (
    <div className="divider">
      <hr />
      <span className="divider__text">
        Shades Of <span className="divider__text--color">{color}</span>{" "}
      </span>
      <hr />
    </div>
  );
};

export default Divider;
