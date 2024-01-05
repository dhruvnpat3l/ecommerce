import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { updateItemQuantity } from '../store/cartSlice';
import EmptyCart from '../components/EmptyCart';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    dispatch(updateItemQuantity({ itemId, newQuantity }));
    console.log(cartItems)
  };

  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  const getTotal = () => {
    return cartItems.reduce((total,item) => total + item.quantity,0)
  }

  return (
    <div>
      <Header/>
      {cartItems.length === 0 ? (
       <EmptyCart/>
      ) : (
       <div className='mb-4'>

         {cartItems.map((item) => (
           
           <div key={item.id}>
              <div className="flex sm:grid  pt-4 pl-4  border-b-2 ">
                <div className="grid grid-cols-3 gap-8">  
                    <div className="">
                      <div className="">
                          <img className="object-cover w-28 border-2 h-32 border-black" src={item.thumbnail} />
                      </div>
                      <div>
                        <h1 className=" text-md font-motley">{item.title}</h1>
                      </div>
                    </div>
                  <div className="">
                    <div className='w-28 pt-10 space-x-1'>
                        <button className='hover:bg-cyan-500 p-2 border-2 border-black'
                                 onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}>
                                  -
                                  </button>
                        <button className='bg-cyan-500 p-2 border-2 border-black'>{item.quantity}</button>
                        <button className='p-2 hover:bg-cyan-500 border-2 border-black'
                                  onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}>
                                    +
                                    </button>
                    </div>
                  </div>
                  <div className=" text-lg font-motley pt-10 ">
                         $
                      <label className="inline-block p-2 static font-semibold">{item.quantity * item.price}</label>
                  </div>
                </div>
               </div>
           </div>  
         ))}

            <div className="   capitalize text-lg font-motley pt-2 grid  grid-cols-3">
              <div>

              </div>
              <div className='pl-14'>
                <span>{getTotal()}</span>
              </div>
              <div className='space-x-2'>
                <span className="">total price:</span>

                <span className="">$ {getTotalAmount()}</span>
              </div>
                
                
            </div>
       </div>

      )}
    </div>
  );
};

export default CartPage;
