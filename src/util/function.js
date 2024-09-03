export function mergeCarts(carts) {
  const mergedCarts = [];

  carts.forEach((item) => {
    const existingItem = mergedCarts.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      existingItem.count += 1;
    } else {
      mergedCarts.push({
        ...item,
        count: 1,
      });
    }
  });

  return mergedCarts;
}

export function amoutPrice(cart) {
  let amount = 0;
  cart.map((c) => (amount += Number(c.price)));

  return Math.round(amount);
}
