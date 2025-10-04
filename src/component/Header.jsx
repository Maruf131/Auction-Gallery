import React from 'react';
import banner from '../../public/assets/Banner-min.jpg'

const Header = () => {
    return (
        <div className="w-screen h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}>
            <div className='flex flex-col justify-center md:items-start md:text-start items-center text-center  h-full md:max-w-5/6 mx-auto space-y-5'>
                <h1 className='font-bold text-4xl'>Bid on Unique Items from <br />
                    Around the World</h1>
                <p className='text-gray-300'>Discover rare collectibles, luxury goods, and vintage treasures <br />
                    in our curated auctions</p>
                <div>
                    <button className='btn bg-orange-400 text-white font-bold'>Explore Auctions</button>
                </div>
            </div>
        </div>
    );
};

export default Header;