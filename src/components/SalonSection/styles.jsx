import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-family:${({theme})=> theme.font.family};
`;

export const Title = styled.h1`
    	width: 100%;
        color: #605D5E;
        margin: 20px;
`;

export const Subtitle = styled.h2`
    width: 100%;
    font-weight: normal;
    font-size: 20px;
    margin: 0 0 30px 20px;
    color: #605D5E;
`;