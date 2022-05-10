import styled from 'styled-components';

export const BannerContainer = styled.div`
    height: 100vh;
    width: 100%;
    padding-left: 10%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    
    background-image:url("../banner.jpg");
    background-position:center;
    background-size: cover;
    color:${({theme})=>theme.colors.neutral.white};
    text-shadow: -4px 0 10px #000;

    h2{
        font-size: ${({theme})=>theme.spacings.large};
    }
    
    p{
        font-size: ${({theme})=>theme.font.sizings.xsmall};
    }
`;

export const BlurSection = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: 200px;
    padding-left: 10%;
    backdrop-filter:blur(20px);

    h3{
        font-weight: normal;
        font-size: ${({theme})=>theme.font.sizings.medium};
        margin-bottom: ${({theme})=>theme.spacings.xxsmall};
        text-shadow: -4px 0 20px #000;
    }
    `
export const FormSeleted = styled.div`
    display: flex;
    column-gap: 30px;
    
    Button{
        padding: 0 ${({theme})=>theme.spacings.small};
        font-size: ${({theme})=>theme.font.sizings.small};
    }
    
    `;
export const SelectField = styled.div`
    width: 60%;
    
    display: flex;
    border:2px solid ${({theme})=>theme.colors.neutral.light};
    border-radius: ${({theme})=>theme.border.radius};
    
    label{
        padding: 10px;
        flex: 1;
        
        span{
            font-size: ${({theme})=>theme.font.sizings.small};
            color:${({theme})=>theme.colors.neutral.light};
            text-shadow: 0px 0px 20px #000;
        }
        select{
            width: 100%;
            margin-top: ${({theme})=>theme.spacings.xxsmall};
            border: none;
            background: transparent;
            font-size: ${({theme})=>theme.font.sizings.xsmall};
            color:${({theme})=>theme.colors.neutral.white};
            outline: none;
        }
    }

`;