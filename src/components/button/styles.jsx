import styled from 'styled-components';

export const StyledButton = styled.button`
    border:none;
    color: inherit;
    cursor: pointer;
    padding: ${({theme})=>theme.spacings.xxxsmall};
    border-radius: ${({theme})=>theme.border.radius};
    background-color: ${({theme})=>theme.colors.primary.green};
`;
