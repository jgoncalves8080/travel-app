import styled, {css} from 'styled-components';
import {AiFillStar} from 'react-icons/ai';

export const Container = styled.div`
    width: 40rem;
    height: 30rem;

    ${({theme})=>css`
        border-radius: ${theme.border.radius};
        font-family:${theme.font.family};
        background-color:${theme.colors.neutral.white};
        margin: ${theme.spacings.small}
    `};
    
`;

export const TopSide = styled.div`
    border-radius: 1rem 1rem 0 0;
    height: 17.5rem;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
    position: relative;
    overflow: hidden;
`;

export const Image = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-color: red;
    img{
        width: 100%;
    }

`;

export const Shadow = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 40%, transparent 60%); 
    height: 100%;
    z-index: 1;
`;

export const BottomSide = styled.div`
        height: 12.5rem;
        padding: 1.5rem;
        border-radius: 0 0 1rem 1rem;
`;

export const Row1 = styled.div`
    display: flex;
    justify-content: space-between;

    span{
        color: #999;
        font-size: ${({theme})=>theme.font.sizings.small};
    }

`;

export const Row2 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding-top: 2rem;
    gap:2rem;

    p{
        flex:1;
        font-size: ${({theme})=>theme.font.sizings.small};
    }

    span{
        font-weight: ${({theme})=>theme.font.bold};  
        font-size: ${({theme})=>theme.font.sizings.large};
        color:#434343;
    }
`;

export const Button = styled.button`    
    padding: 1.0rem 2.0rem;
    border-radius: ${({theme})=> theme.border.radius};
    border: none;
    font-size: 1.4rem;
    background-color: ${({theme})=> theme.colors.primary.green};
    cursor: pointer;
`;

export const Point = styled.div`
    
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 1rem;  
    border-radius: 1.6rem;
    z-index: 1;
    
    ${({theme})=>css`
        background: linear-gradient(91.97deg,
            ${theme.colors.secondary.yellow} 14.73%, #FFCD61 97.52%);

        color:${theme.colors.neutral.white};
        font-size: ${theme.font.sizings.xsmall};
        font-weight: ${theme.font.bold};  
    `}
`;

export const Star = styled(AiFillStar)`
    font-size: 1.6rem;
`;

export const Title = styled.h2`
    color:${({theme})=>theme.colors.neutral.white};
    font-size: ${({theme})=>theme.font.sizings.xlarge};
    font-weight: ${({theme})=>theme.font.normal};
    z-index:1;
`;
