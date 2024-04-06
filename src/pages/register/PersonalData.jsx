import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-grid-system";
import { Typography } from "../../components/Typography/Typography";
import { TextField } from "../../components/TextField/TextField";
import { DropDown } from "../../components/DropDown/DropDown";
import { Button } from "../../components/Button/Button";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

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

const formatPhone = (worth) => {
  if (!value) return;

  const telephone = worth.replace(/\D/g, "");

  return `(${telephone.slice(0, 2)}) ${telephone.slice(2, 7)}-${telephone.slice(
    7
  )}`;
};

const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .lowercase()
    .required("Campo obrigatório")
    .min(2, "Digite seu nome completo"),
  city: Yup.string()
    .required("Campo obrigatório")
    .max(58, "Digite uma cidade válida"),
  state: Yup.string().required("Campo obrigatório"),
  email: Yup.string()
    .required("Campo obrigatório")
    .email("Digite um e-mail válido"),
  telephone: Yup.string()
    .required("Campo obrigatório")
    .matches(/^\d{11}$/, "Número de telefone inválido")
    .transform(formatPhone),
  password: Yup.string().required("Campo obrigatório"),
  confirmPassword: Yup.string()
    .required("Campo obrigatório")
    .oneOf([Yup.ref("password"), null], "As senhas não conferem"),
  terms: Yup.boolean()
    .required("Campo obrigatório")
    .oneOf([true], "Você deve aceitar os termos"),
  birth: Yup.date()
    .required("Campo obrigatório")
    .max(new Date(), "Digite uma data válida"),
});

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
      validationSchema={schema}
      onSubmit={(values) => {
        console.log("Dados do formulário", values);
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
            <Col>
              <TextField title="Data de nascimento" name="birth" type="date" />
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
            <label>
              <Field type="checkbox" name="terms" />
              Aceito os termos e condições
            </label>
          </Row>
          {formik.errors.terms ? (
            <div style={{ color: "red", marginTop: "4px" }}>
              {formik.errors.terms}
            </div>
          ) : null}
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
