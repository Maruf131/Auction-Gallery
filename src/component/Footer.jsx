

const Footer = () => {
    return (
        <div className="flex flex-col items-center bg-gray-800 p-20">
            <div>
                <a className="btn btn-ghost text-2xl">Auction <span className='text-orange-400'>Gallery</span></a>
            </div>
            <div className="flex gap-4">
                <h3>Bit.</h3>
                <h3>Win.</h3>
                <h3>Own.</h3>
            </div>
            <div className="mt-2">
                <ul className="md:flex gap-8 text-center">
                    <li><a>Home</a></li>
                    <li><a>Auctions</a></li>
                    <li><a>Categories</a></li>
                    <li><a>How to works</a></li>

                </ul>
            </div>
            <div>
                <p className="text-sm text-gray-300 mt-4"><span>©2025AuctionHub. All rights reserved.</span></p>
            </div>
        </div>
    );
};

export default Footer;