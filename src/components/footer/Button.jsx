import React from 'react'
import * as S from './styles'


const Button = (props, ...pros) => {
  return (
    <S.InputArea>
        <S.InputEmail type={props.type} placeholder={props.placeholder}/>
        <S.ButtonSubmit>Submit</S.ButtonSubmit>
    </S.InputArea>
  )
}

export default Button;