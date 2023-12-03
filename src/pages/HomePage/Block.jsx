import styled from "@emotion/styled"
import { Row } from "react-grid-system"
import { Typography } from "../../components/Typography/Typography"

const ContanierStylized = styled.div`
    text-align: center;
    padding-top: ${props => props.theme.spacing.s};
`
const Block = ({title, children}) => {
    return (<ContanierStylized>
        <Typography component="h2" variant="h2">
            {title}
        </Typography>
        <Row >
            {children}
        </Row>
    </ContanierStylized>)
}

export default Block