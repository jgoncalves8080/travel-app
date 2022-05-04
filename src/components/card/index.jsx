import React from 'react';
import { Button, Container, Point, Title } from './styles';

const card =
  {
    id:0,
    url:'https://cdn.pixabay.com/photo/2019/11/11/15/32/barber-4618697_960_720.jpg',
    name:'Salão Crespolindo',
    point:4.8,
    local:'Maianga, Sagrada Família',
    descripition:'Manicure, Pedicure, Crespo Lorem Ipsum',
    price: '1.000kz'
  };

function Card() {
  return(
    <Container>
          <div className="top">
            <Title>{card.name}</Title>
            <Point>{card.point} start</Point>
          </div>
          <div className="bottom">
            <div className="row1">
              <span>{card.local}</span>
              <Button>Reservar</Button>
            </div>
            <div className="row2">
              <p>{card.descripition}</p>
              <span>Apartir de {card.price}</span>
            </div>
          </div>
    </Container>
  );
}

export default Card;
