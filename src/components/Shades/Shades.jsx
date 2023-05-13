import { useEffect, useState } from "react";
import { GetGlobalContexts } from "../../utils/globalContext";
import Values from "values.js";
import { toast } from "react-hot-toast";

const Shades = () => {
  const { color, h2l } = GetGlobalContexts();
  const [shades, setShades] = useState([]);
  console.log(shades);

  useEffect(() => {
    try {
      const values = new Values(color).shades(5);
      const sorted = [...values].sort((a, b) =>
        h2l ? b.weight - a.weight : a.weight - b.weight
      );
      setShades(sorted);
    } catch (error) {
      setShades([]);
    }
  }, [color, h2l]);

  return (
    <div className="shades">
      {shades.map((shade, i) => (
        <div
          key={i}
          className="shades__card"
          style={{ backgroundColor: `#${shade.hex}` }}
          onClick={() => {
            navigator.clipboard
              .writeText(`#${shade.hex}`)
              .then(() => toast.success("Copied!"))
              .catch(() => toast.error("Did not Copied"));
          }}
        >
          <h2>#{shade.hex}</h2>
        </div>
      ))}
      {!shades.length && (
        <h2 className="shades__error">No Colors Found</h2>
      )}
    </div>
  );
};

export default Shades;
