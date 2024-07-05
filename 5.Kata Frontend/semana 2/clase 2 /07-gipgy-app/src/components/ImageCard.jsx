import React from 'react'

const ImageCard = ({ title, url }) => {
  return (
    <div className='image-container'>
      <img className='image-view' src={url} alt={title} />
    </div>
  )
};

export default ImageCard