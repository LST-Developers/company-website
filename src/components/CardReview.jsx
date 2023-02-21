import React from 'react';

function CardReview({imageUrl,comment, rating, name, position}) {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i} className="star filled">&#9733;</span>);
    } else {
      stars.push(<span key={i} className="star">&#9734;</span>);
    }
  }
  return (
    <div className='card'>
      <img src= {imageUrl} alt='user'></img>
      <p>{comment}</p>
      <div className='star-rating'>
        {stars}
      </div>
      <h3>{name}</h3>
      <span className='position'>{position}</span>
    </div>
  )
}

export default CardReview