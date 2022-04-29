import styled from 'styled-components';

export const BannerContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    padding-left: 10%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 25px;
    
    background-color: ${({theme})=>theme.colors.neutral.light};
    background-image: url('../../image/banner.jpg');
    background-position:center;
    background-size: cover;
    color:${({theme})=>theme.colors.neutral.white};

    h2{
        font-size: ${({theme})=>theme.spacings.large};
        line-height: ${({theme})=>theme.spacings.large};
    }
`;

export const BlurSection = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 150px;
    backdrop-filter:blur(4px);

    
    border: 1px solid #000;
`