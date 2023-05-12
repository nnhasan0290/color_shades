import Switch from "./Switch";

const Header = () => {
  return (
    <div className="heading">
      <h2 className="heading__title">Color Shade Generator</h2>
      <form className="heading__form">
        <input type="text" className="heading__form__input" />
        <input type="submit" className="heading__form__submit" value={"Search"}/>
      </form>
      <Switch/>
    </div>
  );
};

export default Header;
