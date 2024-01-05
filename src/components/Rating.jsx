
import React from 'react';

const StarIcon = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'} ms-1`}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 22 20"
  >
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
  </svg>
);

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const remainingStar = rating - filledStars;

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, index) => (
        <StarIcon key={index} filled />
      ))}
      {remainingStar > 0 && remainingStar < 0.25 && <StarIcon filled={false} />}
      {remainingStar >= 0.25 && remainingStar < 0.75 && <StarIcon filled />}
      {remainingStar >= 0.75 && <StarIcon filled />}
    </div>
  );
};

export default Rating;
