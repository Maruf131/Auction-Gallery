import React from 'react';
import { FaHeart } from "react-icons/fa6";

const Collection = ({ Collection, addToCart }) => {
    const { id, image, title, currentBidPrice, description, timeLeft } = Collection;

    return (
        <div>
            <div className="card bg-base-100 shadow-sm border p-4">
                <figure>
                    <img className='w-full h-[200px] rounded-2xl'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className='space-y-3'>
                    <h2 className="card-title">{title}</h2>
                    <p className='text-gray-300'>{description}</p>
                </div>
                <div className='mt-5'>
                    <div className='flex justify-between'>
                        <h3 className='font-bold text-gray-300'>Current Bit : </h3>
                        <h3>$ {currentBidPrice}</h3>
                    </div>
                    <div className='mt-2 flex justify-between'>
                        <h3 className='font-bold text-gray-300'>Time Left : </h3>
                        <h3>{timeLeft}</h3>
                    </div>
                    <div className='text-center mt-5'>
                        <button onClick={() => addToCart(Collection, currentBidPrice, id)} className='btn bg-orange-400 font-bold'>Bit Now  <FaHeart></FaHeart></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Collection;