import React from 'react';
import { Button, Container, Point, Title } from './styles';


function Card({card}) {
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
