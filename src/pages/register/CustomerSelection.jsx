import { Col, Row } from "react-grid-system";
import { Typography } from "../../components/Typography/Typography";
import { Link } from "../../components/Link/Link"

import client from './assets/client.png';
import freelancer from './assets/freela.png';

const CustomerSelection = () => {
    return (
        <>
            <Typography variant="h1" component="h1">
                Crie seu cadastro
            </Typography>
            <Typography variant="h3" component="h2">
                Como podemos te ajudar?
            </Typography>
            <Row>
                <Col md={6} sm={12}>
                    <img src={client} alt="" />
                    <Typography variant="body" component="body">
                        Sou cliente e preciso de um freela!
                    </Typography>
                </Col>
                <Col md={6} sm={12}>
                    <img src={freelancer} alt="" />
                    <Typography variant="body" component="body">
                        Sou um freela e preciso de clientes!
                    </Typography>
                </Col>
            </Row>
            <div style={{ textAlign: 'center' }}>
                <Typography variant="body2" component="body2">
                    Já tem conta?
                </Typography>
                <p>
                    <Link variant="secondary">Faça login!</Link>
                </p>
            </div>
        </>
    );
}

export default CustomerSelection;