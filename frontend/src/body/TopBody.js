import React, { useEffect, useState } from 'react';
import './body.css';
import { assets } from '../assets/assets';

const TopBody = () => {
  const [currentAssets, setCurrentAssets] = useState(assets.slice(0, 3))

  const rotateAssets = () => {
    setCurrentAssets((prevAssets) =>{
      const newAssets = [...prevAssets];
      const firstAsset = newAssets.shift();
      newAssets.push(firstAsset);
      return newAssets;
    });
  };

  useEffect(() => {
    const intervalId = setInterval(rotateAssets, 5000);
    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <div className='container'>
      <div className='div-left'>
        <h1>Elegance meets beauty <br /> Sparkle with FloraGems today!s</h1>
        <p>At FloraGems, we bring you the perfect blend of timeless elegance and natural beauty. Discover our exquisite collection of handcrifted jewellery and vibrant flowers, curated to add charm to your special moments. Whenever you're celebrating love, We offer something truly unique to make every occasion unforgetteble.</p>
        <a href="#collection">View Collection</a>
      </div>
      <div className='div-right'>
        {currentAssets.map((asset, index) => (
          <div key={asset.id}
            className={`asset ${
            index === 0
              ? "left"
              : index === 1
              ? "middle"
              : index === 2
              ? "right"
              : ""
            }`}>
            <img src={asset.value} alt={asset.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBody