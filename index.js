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

//  var removeByAttr = function(arr, attr){
  var itemToRemove = item
  var i = cart.length;

  while(i--){
     if( cart[i]
        && cart[i].hasOwnProperty(itemToRemove)
        && (arguments.length > 2 && cart[i][itemToRemove] === value ) ){
        array.splice(i,1);
        return cart

      } else {
        console.log("That item is not in your cart.")
      }
  }
}

function placeOrder(cardNumber) {
  // write your code here
}
