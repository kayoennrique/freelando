import { Col, Container, Row } from "react-grid-system";
import { Card } from "../../components/Card/Card";
import { Typography } from "../../components/Typography/Typography";
import styled from "@emotion/styled";
import erro404 from './assets/erro-404.png';
import LayoutBase from "../LayoutBase";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";

const StylizedImage = styled.img`
    max-width: 100%;
`

const NotFound404 = () => {
    return (
        <LayoutBase>
            <Container>
                <Row justify="center">
                    <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ marginTop: '48px' }}>
                        <Card>
                            <Typography
                                variant="h1"
                                component="h1"
                            >
                                Ops... Página não encontrada :(
                            </Typography>
                            <figure>
                                <StylizedImage src={erro404} />
                            </figure>
                            <Typography
                                variant="body"
                                component="body"
                            >
                                Não encontramos a página que você está buscando, mas temos muitas outras para você navegar!
                            </Typography>
                            <div style={{ textAlign: 'center' }}>
                                <Link to='/'>
                                    <Button variant="secondary">
                                        Voltar para a home
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </LayoutBase>
    )
}

export default NotFound404;