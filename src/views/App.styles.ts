import styled from "styled-components";

export const StyledMain = styled.main`
    transform: translateY(-25px);
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 20px 20px 0 0;
    padding: 15px;
    max-width: 100vw;
    overflow-x: hidden;
`;

export const Wrapper = styled.div`
    max-width: 100vw;
    height: auto;
    overflow-x: hidden;
`;