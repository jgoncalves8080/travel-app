import React from 'react';
import { Container } from './styles';
import styled from 'styled-components';
import Button from './Button';

// import { Container } from './styles';


const Section = styled.section`

  width: 80%;
  height: 300px;
   
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  justify-content: space-between;


`
const Point = styled.div`

  width: 0.2rem;
  height: 0.2rem;
  background: #fff;

  margin-bottom: 0.1rem;


`

const Titulo = styled.h1`

  color : ${({theme})=> theme.colors.neutral.white};
  font-size: ${({theme})=> theme.font.sizings.xsmall};
  margin-bottom: 0.5rem;

`;

const Titulo2 = styled.h1`

  color : ${({theme}) => theme.colors.neutral.white};
  font-size: ${({theme})=> theme.font.sizings.xsmall};
  
  

`;

const Lists = styled.ul`
 
  width: 200px;
  height: 20px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;

const Botton = styled.div`

  color: ${({theme}) => theme.colors.neutral.white};
  margin-top: 2rem;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  
`

const Squad = styled.div`

  width: 20px;
  height: 30px;
 
  border: 1px solid #fff;
  border-radius: 0.1rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

const Item = styled.li`

  color: ${({theme}) => theme.colors.neutral.white};
  list-style-type: none;
  font-size: 0.8rem;

`;
const Texto =styled.span`
    color: ${({theme})=> theme.colors.neutral.white}
 `;

const Newsletter = styled.section`

  width: 80%;
  height: 70px;
  margin: 0 auto;
  background: ${({theme}) => theme.colors.primary.dark};
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
` 

const Terms = styled.div`

  color: ${({theme}) => theme.colors.neutral.white};

  margin: 0 auto;
  
  font-size: 0.7rem;

`;

  const Dados = [
  {
    titulo: 'Links',
    items: ['Sobre','salões', 'reservas'],
    tel:[{name:'Tel', content: '+244 922 336 982'}],
  },

  {
    titulo: 'Angola',
    items: ['Luanda','R. Lorem Ipsum', 'Marocoo'],
    tel:[{name:'Tel', content: '+244 922 336 982'}, {name:'WhatsApp', content: '+244 995 263 378'}],
  },

  {
    titulo: 'Zuri Box',
    items: ['Zuri market','Zuri Service'],
    tel:[{name:'Email', content: 'geral@zuri-box.com'}, {name:'Facebook', content: 'Zuri Box'}],
  },

  

];

function Footer() {




  return (

    <Container>
      <Section> 
        {Dados.map(obj =>{

          return(
          <div>
           <Titulo>{obj.titulo}</Titulo>
           <Item>{obj.items.map(item => <Lists>{item}</Lists>)}</Item>
         
          {obj.tel.map((item) =>{
            return(
            <Botton>
            <Squad>
            <Point/>
             </Squad>        
              <Texto>{item.name} : {item.content}</Texto>
            </Botton> 
            )
          })}
          </div>
          )
        })}
       </Section>
      <Newsletter>
      <Titulo2>Newsletter Sing Up</Titulo2>
      <Button type="Email" placeholder="Insira seu email aqui..."/>
      </Newsletter>

      <Terms>© 2022 Dline-Code  •  All Rights Reserved</Terms>
    </Container>
  
  );
}

export default Footer;


