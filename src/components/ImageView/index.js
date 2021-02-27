import React from 'react';
import { ImageDiv, ImageTitle, Image } from './style';


const ImageView = ({text, image}) => {
  return (
    <ImageDiv>
      <ImageTitle>{text}</ImageTitle>
      <Image src={image}/>
    </ImageDiv>
  )
}

export default ImageView;

