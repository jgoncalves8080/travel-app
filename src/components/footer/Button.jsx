import React from 'react'
import styled from 'styled-components';


const InputEmail = styled.input`

    width: 40vw;
    height: 40px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 0.2rem;
    outline: none;
    border: none;

`;

const InputArea = styled.section`
    position: relative;
    right: -7vw;
`;

const ButtonSubmit = styled.button`

    width: 7.6vw;
    height: 30px;
    position: relative;
    right: 8vw;
    color : ${({theme}) => theme.colors.neutral.white};
    background: ${({theme}) => theme.colors.secondary.purple};
    border: none;
    outline: none;
    border-radius: 0.2rem;
`


const Button = (props, ...pros) => {
  return (
    <InputArea>
        <InputEmail type={props.type} placeholder={props.placeholder}/>
        <ButtonSubmit>Submit</ButtonSubmit>
    </InputArea>
  )
}

export default Button;