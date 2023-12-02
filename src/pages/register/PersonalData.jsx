import { Typography } from "../../components/Typography/Typography";
import { TextField } from "../../components/TextField/TextField"
import { DropDown } from "../../components/DropDown/DropDown"
import { Col, Row } from "react-grid-system";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";

const brazilianStates = [
    { "text": "Acre", "value": "AC" },
    { "text": "Alagoas", "value": "AL" },
    { "text": "Amapá", "value": "AP" },
    { "text": "Amazonas", "value": "AM" },
    { "text": "Bahia", "value": "BA" },
    { "text": "Ceará", "value": "CE" },
    { "text": "Distrito Federal", "value": "DF" },
    { "text": "Espírito Santo", "value": "ES" },
    { "text": "Goiás", "value": "GO" },
    { "text": "Maranhão", "value": "MA" },
    { "text": "Mato Grosso", "value": "MT" },
    { "text": "Mato Grosso do Sul", "value": "MS" },
    { "text": "Minas Gerais", "value": "MG" },
    { "text": "Pará", "value": "PA" },
    { "text": "Paraíba", "value": "PB" },
    { "text": "Paraná", "value": "PR" },
    { "text": "Pernambuco", "value": "PE" },
    { "text": "Piauí", "value": "PI" },
    { "text": "Rio de Janeiro", "value": "RJ" },
    { "text": "Rio Grande do Norte", "value": "RN" },
    { "text": "Rio Grande do Sul", "value": "RS" },
    { "text": "Rondônia", "value": "RO" },
    { "text": "Roraima", "value": "RR" },
    { "text": "Santa Catarina", "value": "SC" },
    { "text": "São Paulo", "value": "SP" },
    { "text": "Sergipe", "value": "SE" },
    { "text": "Tocantins", "value": "TO" }
  ];

const PersonalData = () => {

    return (<div>
        <div style={{ textAlign: 'center' }}>
            <Typography variant="h1" component="h1">
                Crie seu cadastro
            </Typography>
            <Typography variant="body" component="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
            </Typography>
        </div>
        <Row>
            <Col>
                <TextField title="Nome Completo" />
            </Col>
        </Row>
        <Row>
            <Col lg={4} md={4} sm={4}>
                <DropDown title="Estado" options={brazilianStates} />
            </Col>
            <Col lg={8} md={8} sm={8}>
                <TextField title="Cidade" />
            </Col>
        </Row>
        <Row>
            <Col>
                <TextField title="E-mail" />
            </Col>
        </Row>
        <Row>
            <Col lg={6} md={6} sm={6}>
                <TextField title="Senha" />
            </Col>
            <Col lg={6} md={6} sm={6}>
                <TextField title="Repita a Senha" />
            </Col>
        </Row>
        <Row>
            <Col lg={6} md={6} sm={6}>
                <Link to="/cadastro/interesses">
                    <Button variant="secondary">
                        Anterior
                    </Button>
                </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
                <div style={{ textAlign: 'right' }}>
                    <Link to='/cadastro/concluido'>
                        <Button>
                            Próxima
                        </Button>
                    </Link>
                </div>
            </Col>
        </Row>
    </div>
    );
}

export default PersonalData;