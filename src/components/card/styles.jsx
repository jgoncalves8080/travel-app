import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
    width: 33%;
    max-width: 400px;
    min-width: 350px;
    height: 300px;
    background-color: #fff;
    border-radius: 10px;
    font-family:${({theme})=> theme.font.family};
    margin: 20px;

    & .top{
        background-image: url('https://cdn.pixabay.com/photo/2019/11/11/15/32/barber-4618697_960_720.jpg');
        background-position: center;
        background-size: cover;
        border-radius: 10px 10px 0 0;
        height: 175px;
        padding: 15px;
        display: flex;
        justify-content: space-between;
        align-items: end;
    }

    & .bottom{
        height: 125px;
        padding: 15px;
        border-radius: 0 0 10px  10px;
        
        & .row1{
            display: flex;
            justify-content: space-between;

            span{
                color: #999;
                font-size: 0.75rem;
            }

        }

        & .row2{
            display: flex;
            justify-content: space-between;
            align-items: end;
            padding-top: 20px;
           
            & p{
                width: 150px;
                font-size: 0.75rem;
            }

            span{
                font-weight: bold;
                color: #434343;
            }

        }
    }


`;

export const Button = styled.button`    
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    font-size: 14px;
    background-color: ${({theme})=> theme.colors.primary.green};
    cursor: pointer;
`;

export const Point = styled.span`
    font-size: 12px;
    border-radius: 30px;
    background: linear-gradient(91.97deg, #F8A170 14.73%, #FFCD61 97.52%);;
    color: #fff;
    padding: 5px;
    font-weight: bold;
`;

export const Title = styled.h2`
    color: #fff;
    font-size: 22px;
    font-weight: normal;
`;

