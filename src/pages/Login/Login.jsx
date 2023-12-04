import styled from "@emotion/styled";
import { useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { TextField } from "../../components/TextField/TextField";
import { Card } from "../../components/Card/Card";
import { Link } from "../../components/Link/Link";
import { Typography } from "../../components/Typography/Typography";
import { Logo } from "./Logo";
import { useUserSessionContext } from "../../context/UserSession";

const FormStylized = styled.form`
    border-bottom: 1px solid;
    border-color: ${props => props.theme.colors.primary.a};
    padding-bottom: ${props => props.theme.spacing.l};
`;

const Login = () => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const { login } = useUserSessionContext();

    const tryLogin = async (e) => {
        e.preventDefault();
        login(email, password);
    }

    return (<Container>
        <Row justify="center">
            <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
                <div style={{ textAlign: 'center' }}>
                    <Logo />
                </div>
                <Card>
                    <div style={{ textAlign: 'center' }}>
                        <Typography variant="h1" component="h1">
                            Efetuar login
                        </Typography>
                    </div>
                    <FormStylized onSubmit={tryLogin}>
                        <TextField
                            title="E-mail:"
                            value={email}
                            onChange={setEmail}
                            type="email"
                        />
                        <TextField
                            title="Senha:"
                            value={password}
                            onChange={setPassword}
                            type="password"
                        />
                        <div style={{ textAlign: 'right' }}>
                            <RouterLink to="">
                                <Typography component="subtitle" variant="subtitle">
                                    Esqueceu sua senha?
                                </Typography>
                            </RouterLink>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Button>
                                Login
                            </Button>
                        </div>
                    </FormStylized>
                    <div style={{ textAlign: 'center' }}>
                        <Typography component="subtitle" variant="subtitle">
                            Ainda não criou sua conta no Freelando?
                        </Typography>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <Link variant="secondary">
                            <RouterLink to="/cadastro">
                                Cadastre-se clicando aqui!
                            </RouterLink>
                        </Link>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>);
}

export default Login;