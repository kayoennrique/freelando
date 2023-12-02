import { Col, Row } from "react-grid-system";
import { Button } from "../../components/Button/Button";
import { Typography } from "../../components/Typography/Typography";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

import conclusion from './assets/client-completed.png';

const StylizedImage = styled.img`
    max-width: 100%;
    border-radius: 16px;
`;

const Concluded = () => {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <Typography variant="h1" component="h1">
                    Seu perfil está completo!
                </Typography>
                <Typography variant="h3" component="h3">
                    Agora é só começar a se conectar com os melhores freelancers do mercado!
                </Typography>
            </div>
            <figure>
                <StylizedImage src={conclusion} alt="" />
            </figure>
            <Row justify="center">
                <Col lg={6} md={6} sm={6} style={{ textAlign: 'center' }}>
                    <Link to='/cadastro'>
                        <Button variant="secondary">
                            Voltar para a home
                        </Button>
                    </Link>
                </Col>
            </Row>
        </>
    );
}

export default Concluded;