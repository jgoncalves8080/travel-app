import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 70px;
  padding-left:10%;
  padding-right:20%;
  color: ${({theme})=>theme.colors.neutral.white}
  `;
  
export const NavBar = styled.nav`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({theme})=>theme.font.sizings.small};

  ul{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    list-style: none;

    li{
      padding: 3px 8px;
      cursor: pointer;
      border-radius: ${({theme})=>theme.border.radius};
      &:hover{
        background-color: #fff5;
      }
    }
  }

  div{
    display: flex;
    gap: 10px;
  }
`