import classes from "./Header.module.css";
import MealImage from "../../assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton'
const Header = (props) => {
    return (
      <>
        <header className={classes.header}>
          <h1>Raja Food</h1>
          <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes["main-image"]}>
          <img src={MealImage} alt="A table full of delicious food!" />
        </div>
      </>
    );
};

export default Header;
