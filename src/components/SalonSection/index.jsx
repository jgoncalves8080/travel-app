import React from 'react';
import Card from '../card';
import {Container,Title, Subtitle} from './styles'

const cards =[
  {
    id:0,
    url:'https://cdn.pixabay.com/photo/2019/11/11/15/32/barber-4618697_960_720.jpg',
    name:'Salão Crespolindo',
    point:4.8,
    local:'Maianga, Sagrada Família',
    descripition:'Manicure, Pedicure, Crespo Lorem Ipsum',
    price: '1.000kz'
  },
  {
    id:1,
    url:'',
    name:'Barbearia PentFino',
    point:4.8,
    local:'Golf 2, Projecto Nova Vida, Rua 157',
    descripition:'Corte Francês, Americano Manicure, Pedicure',
    price: '800kz'
  },
  {
    id:0,
    url:'',
    name:'Salão Crespolindo',
    point:4.8,
    local:'Maianga, Sagrada Família',
    descripition:'Manicure, Pedicure, Crespo Lorem Ipsum',
    price: '1.000kz'
  },
  {
    id:1,
    url:'',
    name:'Barbearia PentFino',
    point:4.8,
    local:'Golf 2, Projecto Nova Vida, Rua 157',
    descripition:'Corte Francês, Americano Manicure, Pedicure',
    price: '800kz'
  },
  {
    id:0,
    url:'',
    name:'Salão Crespolindo',
    point:4.8,
    local:'Maianga, Sagrada Família',
    descripition:'Manicure, Pedicure, Crespo Lorem Ipsum',
    price: '1.000kz'
  },
  {
    id:1,
    url:'',
    name:'Barbearia PentFino',
    point:4.8,
    local:'Golf 2, Projecto Nova Vida, Rua 157',
    descripition:'Corte Francês, Americano Manicure, Pedicure',
    price: '800kz'
  }
];

function SalonSection() {
  return(
    <Container>
        <Title>Destaques</Title>
        <Subtitle>Salões Zuri masi destacados</Subtitle>
        {cards.map(card=>(<Card card={card}/>))}
    </Container>
  );
}

export default SalonSection;