import { useState } from 'react';

const ratingList = [
  'https://www.clipartmax.com/png/middle/67-676995_5-star-rating-png.png',
  'https://www.clipartmax.com/png/small/67-676956_out-of-3-out-of-5-star-rating.png',
  'https://www.clipartmax.com/png/small/73-731815_stars-clipart-2-5-star-rating.png',
  'https://www.clipartmax.com/png/small/297-2970338_rating-2-out-of-5-gold-stars.png',
];

function Rating() {
  const [ratingValue, setRatingValue] = useState(0);

  return (
    <div className="rating-block">
      <img
        src={ratingList[ratingValue]}
        alt="Текущий рейтинг"
        width="150"
      />

      <div className="rating-buttons">
        <button onClick={() => setRatingValue(0)}>Плохо</button>
        <button onClick={() => setRatingValue(1)}>Приемлемо</button>
        <button onClick={() => setRatingValue(2)}>Хорошо</button>
        <button onClick={() => setRatingValue(3)}>Отлично</button>
      </div>
    </div>
  );
}

export default Rating;