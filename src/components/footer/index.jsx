import React from 'react';
import * as S from './styles';
 
import Button from './Button';
import { mockFooterData } from './mock';
//import styled from 'styled-components';
// import { Container } from './styles';






function Footer() {

  return (

    <S.Container>
      <S.Popup>^</S.Popup>
      
      <S.Section> 
        {mockFooterData.map(obj =>{

          return(
          <div>
           <S.Titulo>{obj.titulo}</S.Titulo>
           <S.Item>{obj.items.map(item => <S.Lists>{item}</S.Lists>)}</S.Item>
         
          {obj.tel.map((item) =>{
            return(
            <S.Botton>
            <S.Squad>
            <S.Point/>
             </S.Squad>        
              <S.Texto>{item.name} : {item.content}</S.Texto>
            </S.Botton> 
            )
          })}
          </div>
          )
        })}
       </S.Section>
      <S.Newsletter>
      <S.Titulo2>Newsletter Sing Up</S.Titulo2>
      <Button type="Email" placeholder="Insira seu email aqui..."/>
      </S.Newsletter>

      <S.Terms>© 2022 Dline-Code  •  All Rights Reserved</S.Terms>
    </S.Container>
  
  );
}

export default Footer;