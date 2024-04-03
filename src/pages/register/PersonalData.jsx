import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-grid-system";
import { Form, Formik } from "formik";
import { Typography } from "../../components/Typography/Typography";
import { TextField } from "../../components/TextField/TextField";
import { DropDown } from "../../components/DropDown/DropDown";
import { Button } from "../../components/Button/Button";

const brazilianStates = [
  { text: "Acre", value: "AC" },
  { text: "Alagoas", value: "AL" },
  { text: "Amapá", value: "AP" },
  { text: "Amazonas", value: "AM" },
  { text: "Bahia", value: "BA" },
  { text: "Ceará", value: "CE" },
  { text: "Distrito Federal", value: "DF" },
  { text: "Espírito Santo", value: "ES" },
  { text: "Goiás", value: "GO" },
  { text: "Maranhão", value: "MA" },
  { text: "Mato Grosso", value: "MT" },
  { text: "Mato Grosso do Sul", value: "MS" },
  { text: "Minas Gerais", value: "MG" },
  { text: "Pará", value: "PA" },
  { text: "Paraíba", value: "PB" },
  { text: "Paraná", value: "PR" },
  { text: "Pernambuco", value: "PE" },
  { text: "Piauí", value: "PI" },
  { text: "Rio de Janeiro", value: "RJ" },
  { text: "Rio Grande do Norte", value: "RN" },
  { text: "Rio Grande do Sul", value: "RS" },
  { text: "Rondônia", value: "RO" },
  { text: "Roraima", value: "RR" },
  { text: "Santa Catarina", value: "SC" },
  { text: "São Paulo", value: "SP" },
  { text: "Sergipe", value: "SE" },
  { text: "Tocantins", value: "TO" },
];

const PersonalData = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        state: "",
        city: "",
        telephone: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Campo obrigatório";
        }
        if (!values.state) {
          errors.state = "Campo obrigatório";
        }
        if (!values.city) {
          errors.city = "Campo obrigatório";
        }
        if (!values.password) {
          errors.password = "Campo obrigatório";
        }
        if (!values.telephone) {
          errors.telephone = "Campo obrigatório";
        } else if (!/^\d{11}$/i.test(values.telephone)) {
          errors.telephone = "Número de telefone inválido";
        }
        if (!values.email) {
          errors.email = "Campo obrigatório";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Email inválido";
        }
        if (!values.confirmPassword) {
          errors.confirmPassword = "Campo obrigatório";
        } else if (values.password != values.confirmPassword) {
          errors.confirmPassword = "As senhas não conferem";
        }
        return errors;
      }}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="h1" component="h1">
              Crie seu cadastro
            </Typography>
            <Typography variant="body" component="body">
              Crie seu perfil gratuitamente para começar a trabalhar com os
              melhores freelancers. Em seguida, você poderá dar mais detalhes
              sobre suas demandas e sobre sua forma de trabalho.
            </Typography>
          </div>
          <Row>
            <Col>
              <TextField title="Nome completo" name="name" type="text" />
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={4}>
              <DropDown title="Estado" options={brazilianStates} />
            </Col>
            <Col lg={8} md={8} sm={8}>
              <TextField title="Cidade" name="city" type="text" required />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <TextField title="E-mail" name="email" type="email" required />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <TextField
                title="Telefone"
                name="telephone"
                type="tel"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <TextField
                title="Senha"
                name="password"
                type="password"
                required
              />
            </Col>
            <Col lg={6} md={6} sm={6}>
              <TextField
                title="Confirme sua senha"
                name="confirmPassword"
                type="password"
                required
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={6}>
              <Link to="/cadastro/interesses">
                <Button variant="secondary">Anterior</Button>
              </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
              <div style={{ textAlign: "right" }}>
                {/* <Link to='/cadastro/concluido'> */}
                <Button>Próxima</Button>
                {/* </Link> */}
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};

export default PersonalData;
