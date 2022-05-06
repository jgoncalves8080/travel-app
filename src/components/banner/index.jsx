import React from 'react';
import Button from '../button';
import {FormSeleted, SelectField, BannerContainer,BlurSection } from './styles';

function Banner() {
  return (
    <BannerContainer>
      <h2>Cuide de sua <br/> aparência</h2>
      <p>seja um cliente zuri, e cuide de sua beleza<br/> com os melhores salões...</p>

      <BlurSection>
        <h3>Procure por Salões</h3>
        <FormSeleted>
          <SelectField>
            <label>
              <span>Tipo de Serviço</span><br/>
              <select>
                <option>Corte de Cabelo</option>
              </select>
            </label>
            <label>
            <span>Localidade</span><br/>
              <select>
                <option>Talatona</option>
              </select>
            </label>
          </SelectField>
          <Button value='Pesquisar'/>
        </FormSeleted>
      </BlurSection>
    </BannerContainer>
  );
}

export default Banner;
