const isCurrentItemInCart = (cart, currentItem) => {
  for (let cartItem of cart) {
    if (cartItem.item.name === currentItem.name) {
      return { response: true, quantity: cartItem.quantity };
    }
  }

  return { response: false, quantity: 0 };
};

export default isCurrentItemInCart;
