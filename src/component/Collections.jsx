import React, { use } from 'react';
import Collection from './Collection';

const Collections = ({ bidDataPromise, addToCart }) => {
    const collections = use(bidDataPromise);

    return (
        <div className='md:w-2/3 mx-auto'>
            <div className='grid md:grid-cols-2 gap-5'>
                {
                    collections.map(collection => <Collection key={collection.id} addToCart={addToCart} Collection={collection} ></Collection>)
                }
            </div>
        </div>
    );
};

export default Collections;