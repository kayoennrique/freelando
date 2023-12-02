import { Col, Row } from "react-grid-system";
import { Typography } from "../../components/Typography/Typography";
import GroupRadio from "../../components/Radio/GroupRadio";
import { Button } from "../../components/Button/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const options = [
    {
        value: 1,
        label: 'TI e Programação',
    },
    {
        value: 2,
        label: 'Design e Multimídia',
    },
    {
        value: 3,
        label: 'Revisão',
    },
    {
        value: 4,
        label: 'Tradução',
    },
    {
        value: 5,
        label: 'Transcrição',
    },
    {
        value: 6,
        label: 'Marketing',
    },
]

const Interests = () => {

    const [option, setOption] = useState('');

    return (<div style={{ textAlign: 'center' }}>
        <Typography variant="h1" component="h1">
            Crie seu cadastro
        </Typography>
        <Typography variant='h3' component='h2'>
            Qual a área de interesse?
        </Typography>
        <GroupRadio options={options} value={option} onChange={setOption} />
        <Row>
            <Col lg={6} md={6} sm={6}>
                <Link to="/cadastro">
                    <Button variant="secondary">
                        Anterior
                    </Button>
                </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
                <div style={{ textAlign: 'right' }}>
                    <Link to='/cadastro/dados-pessoais'>
                        <Button>
                            Próxima
                        </Button>
                    </Link>
                </div>
            </Col>
        </Row>
    </div>)
}

export default Interests;