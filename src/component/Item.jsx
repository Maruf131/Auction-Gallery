import React from 'react';
import { GoXCircle } from "react-icons/go";

const Item = ({ bookmark, handleRemove }) => {
    return (
        <div className='border-2 p-4 rounded-xl mb-2'>
            <div className='flex gap-4 justify-between items-center'>
                <img className='h-14 w-14' src={bookmark.image} alt="" />
                <p className='text-sm text-gray-400'>{bookmark.description}</p>
                <button onClick={() => handleRemove(bookmark.id)} className='text-2xl'><GoXCircle /></button>
            </div>
        </div>
    );
};

export default Item;