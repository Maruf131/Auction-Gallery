import React from 'react';
import { FaHeart } from "react-icons/fa6";
import Item from './Item';

const Items = ({ bookMarks, bitPrice, handleRemove }) => {


    return (
        <div className='md:w-1/3 mx-auto bg-gray-700 px-4 py-8 rounded-xl mt-5 md:mt-0'>
            <div className='flex gap-4 items-center justify-center font-bold text-3xl'>
                <FaHeart></FaHeart>
                <h1>Favorite Items</h1>
            </div><br /><hr />
            <div className='mt-2'>
                <h1 className=' text-2xl text-center'>Total Bit Amount : $ {bitPrice}</h1>
            </div>
            <div className='py-5 px-2'>
                {
                    bookMarks.map(bookmark => <Item key={bookmark.id} handleRemove={handleRemove} bookmark={bookmark}></Item>)
                }
            </div>

        </div>
    );
};

export default Items;