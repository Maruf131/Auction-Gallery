
import './App.css'
import Collections from './component/Collections';
import Header from './component/Header'
import Items from './component/Items';
import Navbar from './component/Navbar'
import { useState } from 'react';

const bidDataPromise = fetch('public/bid.json').then(res => res.json());

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [bitPrice, setBitPrice] = useState(0);

  const addToCart = (collections, currentBidPrice) => {
    const newCollection = [...bookMarks, collections];
    setBookMarks(newCollection);

    const newPrice = bitPrice + currentBidPrice;
    setBitPrice(newPrice)

  }
  const handleRemove = (id) => {
    const removeItems = bookMarks.filter(bookmark => bookmark.id !== id);
    setBookMarks(removeItems);

  }

  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <div className='md:flex gap-5 mt-10 md:max-w-5/6 mx-auto p-4'>
        <Collections bidDataPromise={bidDataPromise} addToCart={addToCart}></Collections>
        <Items bookMarks={bookMarks} handleRemove={handleRemove} bitPrice={bitPrice}></Items>
      </div>
    </div>
  )
}

export default App;
