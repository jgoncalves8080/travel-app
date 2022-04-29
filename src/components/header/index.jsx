import React from 'react';
import Button from '../button';

import { Container,NavBar } from './styles';

function Header() {
  return (
    <Container>
      <NavBar>
        <ul>
          <li>Home</li>
          <li>Salões</li>
          <li>Sobre</li>
        </ul>

        <div>
          <Button value='Criar Conta'/>
          <input 
            type='search' 
            placeholder='Procurar...'
          />
        </div>
      </NavBar>
    </Container>
  );
}

export default Header;
