import React from 'react';
import Button from '../button';
import { BannerContainer,BlurSection } from './styles';

function Banner() {
  return (
    <BannerContainer>
      <h2>Cuide de sua <br/> aparência</h2>
      <p>seja um cliente zuri, e cuide de sua beleza<br/> com os melhores salões...</p>

      <BlurSection>
        Ola Pessooasaksasaisjaisajs
        <Button value='Pesquisar'/>
      </BlurSection>
    </BannerContainer>
  );
}

export default Banner;
