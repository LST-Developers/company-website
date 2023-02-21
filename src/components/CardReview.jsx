import React from 'react';

function CardReview({imageUrl, rating, name, position}) {
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
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique recusandae eos illum accusantium aliquam commodi quis, reiciendis dolores placeat qui quam autem. Voluptatum eius sint laborum quas! Accusamus, recusandae earum?</p>
      <div className='star-rating'>
        {stars}
      </div>
      <h3>{name}</h3>
      <h4>{position}</h4>
    </div>
  )
}

export default CardReview