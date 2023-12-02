import styled from "@emotion/styled";

export const StylizedDropList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    z-index: 1;
    border: 1px solid ${props => props.theme.colors.neutral.a};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    margin: 0;
    padding: 0 ${props => props.theme.spacing.m};
    list-style: none;
`;