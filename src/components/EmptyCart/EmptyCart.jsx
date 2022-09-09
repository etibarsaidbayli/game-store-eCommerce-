import style from "./EmptyCart.module.css";

function EmptyCart() {
  return (
    <div className={style.cart__empty}>
      <h3>Sebete hecne elave etmemisiniz</h3>
    </div>
  );
}

export default EmptyCart;
