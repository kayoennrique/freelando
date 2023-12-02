import styled from "@emotion/styled";

export const ItemListDrunkStylized = styled.li`
    padding: ${props => props.theme.spacing.xs} 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colors.neutral.c};
    cursor: pointer;       
    &:last-child {
        border: none;
    }
    color: ${props => props.focusActive ? props.theme.colors.focus : 'inherit'};
    &:hover {
        color: ${props => props.theme.colors.focus};
    }
`;