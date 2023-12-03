import styled from "@emotion/styled"
import { Col } from "react-grid-system"
import { Card } from "../../../../components/Card/Card"
import { Typography } from "../../../../components/Typography/Typography"

const ContentCardStylized = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: ${props => props.theme.colors.primary.c};
`

const CardFreela = ({icon, text}) => {
    return (<Col sm={12} md={12} lg={6} style={{marginBottom: '24px'}} >
    <Card withEdge={false} variant="secundario">
        <ContentCardStylized>
            {icon}
            <Typography component="body" variant="body">
                {text}
            </Typography>
        </ContentCardStylized>
    </Card>
</Col>)
}

export default CardFreela