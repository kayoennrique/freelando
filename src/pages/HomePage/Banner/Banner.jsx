import styled from '@emotion/styled'
import { Col, Container, Row } from 'react-grid-system'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/Button/Button'
import { Typography } from '../../../components/Typography/Typography'
import imageBanner from './people.png'


const ImgStylized = styled.img`
    max-width: 100%;
`

const FigureStylized = styled.figure`
    padding: ${props => props.theme.spacing.l};
    background: ${props => props.theme.colors.neutral.c};
    color: ${props => props.theme.colors.primary.b};
    margin: 0;
`

const Banner = () => {
    return <FigureStylized>
        <Container>
            <Row align='center'>
                <Col md={5} sm={12}>
                    <figcaption>
                        <Typography component="h1" variant="h1">
                            Uma ponte entre os freelas mais talentosos e os projetos mais interessantes!
                        </Typography>
                    </figcaption>
                    <Link to="/cadastro">
                        <Button>
                            Quero me cadastrar
                        </Button>
                    </Link>
                </Col>
                <Col md={7} sm={12}>
                    <ImgStylized src={imageBanner} alt="" />
                </Col>
            </Row>
        </Container>
    </FigureStylized>
}

export default Banner