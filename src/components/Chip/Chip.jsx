import styled from "@emotion/styled";

const StyledSpan = styled.span`
    border-radius: 16px;
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background: ${props => props.theme.colors.neutral.c};
    border-color: ${props => props.theme.colors.neutral.a};
    padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.s};
    margin: ${props => props.theme.spacing.xs};
    &:hover {
        color: ${props => props.theme.colors.primary.b};
        border-color: ${props => props.theme.colors.primary.b};
        background-color: ${props => props.theme.colors.secondary.b};
    }
`;

const Chip = ({children}) => {
    return (<StyledSpan>
        {children}
    </StyledSpan>);
}

export default Chip;