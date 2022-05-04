import styled, {css} from 'styled-components';

export const Container = styled.div`
    width: 40rem;
    height: 30rem;

    ${({theme})=>css`
        border-radius: ${theme.border.radius};
        font-family:${theme.font.family};
        background-color:${theme.colors.neutral.white};
        margin: ${theme.spacings.small}
    `};
    
    & .top{
        background-image: url('https://cdn.pixabay.com/photo/2019/11/11/15/32/barber-4618697_960_720.jpg');
        background-position: center;
        background-size: cover;
        border-radius: 1rem 1rem 0 0;
        height: 17.5rem;
        padding: 1.5rem;
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    & .bottom{
        height: 12.5rem;
        padding: 1.5rem;
        border-radius: 0 0 1.0rem  1.0rem;
        
        & .row1{
            display: flex;
            justify-content: space-between;

            span{
                color: #999;
                font-size: ${({theme})=>theme.font.sizings.small};

            }

        }

        & .row2{
            display: flex;
            justify-content: space-between;
            align-items: end;
            padding-top: 2.0rem;
            gap:2rem;
            & p{
                flex:1;
                font-size: ${({theme})=>theme.font.sizings.small};
            }

            span{
                font-weight: bold;
                font-size: ${({theme})=>theme.font.sizings.large};
                color:#434343;
            }

        }
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

export const Point = styled.span`
    font-size: ${({theme})=>theme.font.sizings.xsmall};
    border-radius: 1rem;
    background: linear-gradient(91.97deg, #F8A170 14.73%, #FFCD61 97.52%);;
    color:${({theme})=>theme.colors.neutral.white};
    padding: .3rem;
    font-weight: bold;
`;

export const Title = styled.h2`
    color:${({theme})=>theme.colors.neutral.white};
    font-size: ${({theme})=>theme.font.sizings.xlarge};
    font-weight: normal;
`;
