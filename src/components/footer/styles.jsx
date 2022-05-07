import styled from 'styled-components';
 

export const Container = styled.div`
    width: 100%;
    height: 90vh;
    background: #0A142F;
    display: flex;
    flex-direction: column;

    background-size: cover;
    
`;

export const Section = styled.section`
  width: 80%;
  height: 30rem;
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  justify-content: space-between;


`
export const Point = styled.div`

  width: 0.2rem;
  height: 0.1rem;
  background: #fff;

  margin-bottom: 0.1rem;
`

export const Titulo = styled.h1`
  
  color : ${({theme})=> theme.colors.neutral.white};
  font-size: ${({theme})=> theme.font.sizings.xsmall};
  font-family: ${({theme}) => theme.font.family};
  margin-bottom: 0.5rem;

`;

export const Titulo2 = styled.h1`

  color : ${({theme}) => theme.colors.neutral.white};
  font-size: 1rem;
  font-family: ${({theme}) => theme.font.family};
  margin-left: ${({theme}) => theme.font.sizings.xsmall};
  
  

`;

export const Lists = styled.ul`
 
  width: 20rem;
  height: 2rem;
  line-height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: ${({theme}) => theme.font.family};


  
`;

export const Botton = styled.div`

  color: ${({theme}) => theme.colors.neutral.white};
  margin-top: 2rem;
  font-size: 0.7rem;
  display: flex;
  align-items: center;
  font-family: ${({theme}) => theme.font.family};
`
export const Squad = styled.div`

  width: 1.2rem;
  height: 1.5rem;
  font-weight: bold;
  border: ${({theme}) => theme.border.solid('white')};
  border-radius: 0.2rem;
  margin-right: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

export const Item = styled.li`

  color: ${({theme}) => theme.colors.neutral.white};
  list-style-type: none;
  font-size: 0.8rem;
  font-family: ${({theme}) => theme.font.family};

`;
export const Texto =styled.span`
    color: ${({theme})=> theme.colors.neutral.white};
    font-family: ${({theme}) => theme.font.family};
    margin-left: ${({theme}) => theme.spacings.xxsmall};
 `;

export const Newsletter = styled.section`

  width: 80%;
  height: 10rem;
  margin: 0 auto;
  background: ${({theme}) => theme.colors.primary.dark};
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  font-family: ${({theme}) => theme.font.family};
` 

export const Terms = styled.div`

  color: ${({theme}) => theme.colors.neutral.white};

  margin: 0 auto;
  
  font-size: 0.7rem;
  font-family: ${({theme}) => theme.font.family};


`;





export const InputEmail = styled.input`

    width: 35rem;
    height: 2.5rem;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.2rem;
    outline: none;
    border: none;

`;

export const InputArea = styled.section`
    position: relative;
    right: -7vw;
`;

export const ButtonSubmit = styled.button`

    width: 7.6vw;
    height: 1.8rem;
    font-size: 0.6rem;
    position: relative;
    right: 8vw;
    color : ${({theme}) => theme.colors.neutral.white};
    background: ${({theme}) => theme.colors.secondary.purple};
    border: none;
    outline: none;
    border-radius: 0.2rem;
`

export const Popup = styled.div`

  width: 2.5rem;
  height: 2.5rem;
  padding: 0.6rem;
  position: relative;
  left: 85vw;
  top:10vh;
  border-radius: 50%;
  transform: scaleX(50,-50);
  color: #fff;
  border: none;
  font-size: 1.5rem;
  background: ${({theme}) => theme.colors.secondary.purple};

`