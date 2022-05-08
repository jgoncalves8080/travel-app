import React from 'react';

type CardProps = {
  name: string;
  url?: string;
  price?: number | string;
  points: 1 | 2 | 3 | 4 | 5;
  description: string;
  local: string;
};

function Card({ name, url, price, points, description }: CardProps) {
  return <div />;
}

export default Card;
