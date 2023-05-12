import { GetGlobalContexts } from "../../utils/globalContext";

const Shades = () => {
  const { shades } = GetGlobalContexts();
  return (
    <div className="shades">
      {shades.map((shade, i) => (
        <div key={i} className="shades__card" style={{backgroundColor:`#${shade.hex}`}}>
          <h2 >{shade.hex}</h2>
        </div>
      ))}
    </div>
  );
};

export default Shades;
