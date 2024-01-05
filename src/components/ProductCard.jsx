import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/cartSlice';

const ProductCard = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items )
  const { id, images, discountPercentage, title, price, rating,thumbnail } = props.product;
  
  const isItemInCart = cartItems.some((item) => item.id === id);

  const handleAddToCart = () => {
    console.log(`add{id}`)
    const newItem ={
      id,
      title,
      price,
      thumbnail,
    };
    dispatch(addToCart(newItem))
  }

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(id))
  }
  
  return (
    <div key={id} className="relative bg-cyan-500 m-10 mb-6 flex w-60 max-w-xs flex-col border-2  rounded-lg border-black shadow-[3px_3px_0px_-0px_rgba(0,0,0,1)] ">
      <div className="relative flex h-48  overflow-hidden border-black border-2 m-2 bg-white">
        <img className="object-fill" src={images[0]} alt="product image" />
        <span className="absolute top-0 right-0 m-2  bg-black px-2 text-center text-sm font-medium text-white">{discountPercentage}% OFF</span>
      </div>
      <div className=" pl-4 "> {/* Added "items-center" class */}
          <h5 className="text-lg   text-slate-900">{title}</h5>
          <p>
            <span className="text-xl font-bold text-slate-900">${price}</span>
          </p>
        
      </div>
      <div className="flex w-full justify-center pb-4 mt-1">
        {isItemInCart ? (
          <button onClick={handleRemoveFromCart} className="flex w-full font-semibold text-lg mx-4 p-2 rounded-lg bg-white justify-center border-2 border-black shadow-[3px_3px_0px_-0px_rgba(0,0,0,1)]">
            Remove
          </button>
        ) : (
          <button onClick={handleAddToCart} className="flex w-full font-semibold text-lg mx-4 p-2 rounded-lg bg-white border-2 border-black shadow-[3px_3px_0px_-0px_rgba(0,0,0,1)]">
            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Add to cart
          </button>
        )}
      </div>
    </div>

  );
};

export default ProductCard;
