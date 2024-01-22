import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useState, useEffect } from "react";
import CartContext from "../../store/cart-context";
const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);
  const noOfCartItem = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer); 
    };
  }, [ctx.items]);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;
