import { GetGlobalContexts } from "../../utils/globalContext";

const Divider = () => {
  const {color} = GetGlobalContexts();
  return (
    <div className="divider">
      <hr />
      <span className="divider__text">20 Shades of <span className="divider__text--color">{color}</span> </span>
      <hr />
    </div>
  );
};

export default Divider;
