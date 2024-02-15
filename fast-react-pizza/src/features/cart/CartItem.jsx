/* eslint-disable no-undef */
function CartItem({ item }) {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li>
      <p>
        {quantity}&times; {name}
      </p>
      <div>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default CartItem;
