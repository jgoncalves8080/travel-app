import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 55px;
  background: red;
  margin: ${({ theme }) => theme.spacings.xsmall};

  ${({ theme }) => css`
    margin: ${theme.spacings.xsmall};
    color: ${theme.colors.neutral.white}
    padding: ${theme.spacings.medium};
  `}
`;
