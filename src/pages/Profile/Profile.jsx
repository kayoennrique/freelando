import styled from "@emotion/styled";
import { Row, Container, Col } from "react-grid-system";
import { Card } from "../../components/Card/Card";
import { Typography } from "../../components/Typography/Typography";

import background from './assets/profile.png'
import avatar from './assets/avatar.png'
import { TextField } from "../../components/TextField/TextField";
import { Button } from "../../components/Button/Button";
import { useEffect } from "react";
import http from "../../http";
import { StoreToken } from "../../utils/StoreToken";

const TitleStylized = styled.h1`
    background: url(${background}) no-repeat;
    margin-top: 0;
    font-weight: 600;
    font-size: 40px;
    background-position: center;
    line-height: 246px;
    text-align: center;
`

const ImgStylized = styled.img`
    max-width: 100%;
    margin: 0 auto;
`

const Profile = () => {

    useEffect(() => {
        http.get('profile')
            .then(response => console.log(response.data))
            .catch(erro => console.error(erro))
    }, [])

    const toSubmitForm = (e) => {
        e.preventDefault()

    }

    return (<>
        <TitleStylized>
            Perfil
        </TitleStylized>
        <Container>
            <form onSubmit={toSubmitForm}>
                <Row>
                    <Col sm={12} md={5}>
                        <Card>
                            <div style={{ textAlign: 'center' }}>
                                <Typography component='h3' variant='h3'>
                                    Nome Completo
                                </Typography>
                                <ImgStylized src={avatar} />
                            </div>
                        </Card>
                    </Col>
                    <Col sm={12} md={7}>
                        <Typography component='h3' variant='h3'>
                            Revise seus dados
                        </Typography>
                        <TextField
                            title='Nome'
                        />
                        <TextField
                            title='Sobrenome'
                        />
                        <Row>
                            <Col sm={12} md={6}>
                                <TextField
                                    title='Celular'
                                    />
                            </Col>
                            <Col sm={12} md={6}>
                                <TextField
                                    title='E-mail' tipo="email"
                                />
                            </Col>
                            <Col sm={12} md={6}>
                                <TextField
                                    title='Código postal'
                                />
                            </Col>
                            <Col sm={12} md={6}>
                                <TextField
                                    title='País'
                                />
                            </Col>
                            <Col sm={12} md={6}>
                                <Button fluid>
                                    Salvar
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
        </Container>
    </>)
}

export default Profile;