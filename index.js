var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: Math.floor((Math.random()*100)+1)})
  console.log(`${item} has been added to your cart.`)
  return cart
 }

function viewCart() {

  const l = cart.length

  if (!l) {
    console.log('Your shopping cart is empty.')
  }

  let cartList = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    cartList.push(`${item} at \$${price}`)
  }

  switch(cartList.length) {
    case 1:
      break;
    case 2:
      cartList = cartList.join(" and ");
      break;
    default:
      cartList[l-1] = "and ".concat(cartList[l-1]);
      cartList = cartList.join(", ");
  }

  console.log(`In your cart, you have ${cartList}.`);
}


function total() {
  const l = cart.length
  let itemPrices = []

  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)[0]
    let price = itemAndPrice[item]

    itemPrices.push(price)
  }
  const sum = itemPrices.reduce((a, b) => a + b, 0);
  return sum
  }

function removeFromCart(item) {

  var i = cart.length;
  var xItem = item
  /*while(i--){
    if(cart[i].hasOwnProperty(item)) {
        cart.splice(i,1);
    } else {
        console.log('That item is not in your cart.')
      }
    }
  return cart*/
  while(i--){
    if(cart[i].hasOwnProperty(xItem)) {
        cart.splice(i,1);
    }
  }
  while(i--){
    if(cart[i].hasOwnProperty(xItem)) {
      console.log('That item is not in your cart.')
    }
}  return cart
}

/*function placeOrder(cardNumber) {
  // write your code here
}*/
