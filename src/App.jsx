import { Toaster } from "react-hot-toast";
import "./assets/styles/_global.scss";
import Divider from "./components/Divider/Divider";
import Header from "./components/Header/Header";
import Shades from "./components/Shades/Shades";
function App() {
  return (
    <>
      {/* heading */}
      <Header />

      <Divider />

      {/* all shades */}
      <Shades />

      {/* react hot toast */}
      <Toaster position="bottom-center" />
    </>
  );
}

export default App;
