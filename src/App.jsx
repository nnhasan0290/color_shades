import { Toaster } from "react-hot-toast";
import "./assets/styles/_global.scss";
import Divider from "./components/Divider/Divider";
import Header from "./components/Header/Header";
import Shades from "./components/Shades/Shades";
function App() {
  return (
    <>
      <Header/>
      <Divider/>
      <Shades/>
      <Toaster position="bottom-center"/>
    </>
  );
}

export default App;
