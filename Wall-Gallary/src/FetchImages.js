import React, { useEffect, useState } from "react";
import './css/style.css'
const FetchImages =  () => {
const [Images,setImages] =  useState('')
useEffect(()=>{
    fetch('https://www.mocky.io/v2/5ecb5c353000008f00ddd5a0').then((res)=>{
        res.json().then((data)=>{
            console.log(data)
            const Images = data[1].links
            setImages(Images)
        })
      })
},[])
      
      console.log(Images)

  return (
    <div>
      <div className="gallery">
        <img
          src={Images.self}
          alt="flex-gallery"
        />
        <img
          src={Images.html}
          alt="flex-gallery"
        />
        <img
          src={Images.photos}
          alt="flex-gallery"
        />
        <img
          src={Images.likes}
          alt="flex-gallery"
        />
        <img
          src={Images.portfolio}
          alt="flex-gallery"
        />
        <img
          src={Images.following}
          alt="flex-gallery"
        />
        <img
          src={Images.followers}
          alt="flex-gallery"
        />
        
      </div>
    </div>
  );
};

export default FetchImages;
