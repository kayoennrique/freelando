import styled from '@emotion/styled'

const DivStylized = styled.div`
    padding: ${props => props.theme.spacing.l};
    border: ${props => props.withEdge ? '1px solid' : 'none'};
    background: ${props => props.variant === 'primary' ? props.theme.colors.secondary.a : props.theme.colors.secondary.c};
    border-color: ${props => props.variant === 'primary' ? props.theme.colors.primary.a : props.theme.colors.primary.c};
    border-radius: ${props => props.theme.spacing.s};
`

export const Card = ({ children, withEdge = true, variant = 'primary'  }) => {
    return (<DivStylized withEdge={withEdge} variant={variant}>
        {children}
    </DivStylized>)
}