import React from 'react';
import { Button, Container, Point, Title, TopSide,BottomSide,Star, Row1, Row2 } from './styles';


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
          <TopSide>
            <Title>{card.name}</Title>
            <Point>
              {card.point}
              <Star/>
            </Point>
          </TopSide>
          <BottomSide>
            <Row1 >
              <span>{card.local}</span>
              <Button>Reservar</Button>
            </Row1>
            <Row2>
              <p>{card.descripition}</p>
              <span>Apartir de {card.price}</span>
            </Row2>
          </BottomSide>
    </Container>
  );
}

export default Card;
