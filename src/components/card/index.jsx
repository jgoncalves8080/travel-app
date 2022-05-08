import React from 'react';
import { Button, Container, Point, Title, TopSide,
        BottomSide,Star, Row1, Row2,Image,Shadow } from './styles';


const card =
  {
    id:0,
    url:'https://www.versum.com/m/br/wp-content/uploads/sites/8/2020/01/layout-salao-de-beleza.jpg',
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
            <Image>
              <img src={card.url} alt="Salão de beleza" />
              <Shadow/>
            </Image>
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
