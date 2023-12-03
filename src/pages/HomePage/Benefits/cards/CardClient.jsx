import styled from "@emotion/styled"
import { Col } from "react-grid-system"
import { Card } from "../../../../components/Card/Card"
import { Typography } from "../../../../components/Typography/Typography"

const SpanStylized = styled.span`
    color: ${props => props.theme.colors.primary.a};
`

const CardClient = ({icon, text}) => {
    return (<Col sm={6} md={6} lg={3} style={{ marginBottom: '24px' }}>
        <Card withEdge={false}>
            {icon}
            <Typography component="body" variant="body">
                <SpanStylized>
                    {text}
                </SpanStylized>
            </Typography>
        </Card>
    </Col>)
}

export default CardClient