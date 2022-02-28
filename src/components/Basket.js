import React from 'react';
import {axios} from 'axios';

export default function Basket(props) {
  
  const { cartItems, onAdd, onRemove , onRemoveProduct } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice  + shippingPrice;

  const do_checkout =  async () => {
    // here i have to create the cart , and do checkout then 
    alert('implemented but not tested , it is commented in the code');
    /*
    const url_to_add = "http://127.0.0.1:8000/api/cart";
    const resp = await axios.post(url_to_add, cartItems);;
    const result_id = await resp.json().id;

    const url_to_do_checkout = http://127.0.0.1:8000/api/do_checkout/'+result_id;
    const resp = await axios.post(url_to_add, cartItems);;
    const result_id = await resp.json().id;

    console.log(result);

  */
  };




  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.title}<hr /></div>

            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
              <button onClick={() => onRemoveProduct(item)} className="remove">
                X
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x ${item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>${totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
              <button onClick={() => do_checkout()}>
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
