import { Col, Container, Row } from "react-grid-system";
import { Card } from "../components/Card/Card";
import { Styles } from "../components/GlobalStyles/Styles";
import { FreelandoLogo } from "../components/Icons/FreelandoLogo";
import { IconInstagram } from "../components/Icons/IconInstagram";
import { IconTwitch } from "../components/Icons/IconTwitch";
import { IconTwitter } from "../components/Icons/IconTwitter";
import { IconWhatsApp } from "../components/Icons/IconWhatsApp";
import { Header } from "../components/Header/Header";
import { ProviderTheme } from "../components/ProviderTheme/ProviderTheme";
import { TextField } from "../components/TextField/TextField";
import { Footer } from "../components/Footer/Footer";
import { Typography } from "../components/Typography/Typography";
import { Button } from "../components/Button/Button";
import { Link } from "../components/Link/Link";
import { ListInline } from "../components/List/ListInline";
import { ItemListInline } from "../components/List/ItemListInline";
import { DropDown } from "../components/DropDown/DropDown";

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

const HomePage = () => {
  return (
    <ProviderTheme>
      <Styles />
      <Header>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo />
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Link>Login</Link>
            </Col>
          </Row>
        </Container>
      </Header>
      <Row justify="center">
        <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
          <Card>
            <Typography variant="h1" component="h1">
              Freelando
            </Typography>
            <Typography variant="body" component="body">
              Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
            </Typography>
            <Row>
              <Col>
                <TextField title="Nome Completo:" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={4} sm={4}>
                <DropDown title="Estado:" options={brazilianStates} />
              </Col>
              <Col lg={8} md={8} sm={8}>
                <TextField title="Cidade:" />
              </Col>
            </Row>
            <Row>
              <Col>
                <TextField title="E-mail:" />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <TextField title="Senha:" />
              </Col>
              <Col lg={6} md={6} sm={6}>
                <TextField title="Repita a Senha:" />
              </Col>
            </Row>
            <Row>
              <Col lg={6} md={6} sm={6}>
                <Button variant="secondary">
                  Anterior
                </Button>
              </Col>
              <Col lg={6} md={6} sm={6}>
                <div style={{ textAlign: 'right' }}>
                  <Button>
                    Próxima
                  </Button>
                </div>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Footer>
        <Container>
          <Row align="center">
            <Col>
              <FreelandoLogo height={40} width={176} />
              <Typography variant="subtitle" component="subtitle">Desenvolvido por Kayo Ennrique. Projeto fictício sem fins comerciais.</Typography>
            </Col>
            <Col style={{ textAlign: 'right' }}>
              <Typography variant="subtitle" component="subtitle">Acesse as minhas redes:</Typography>
              <ListInline>
                <ItemListInline>
                  <a href="/" aria-label="Link para o WhatsApp">
                    <IconWhatsApp />
                  </a>
                </ItemListInline>
                <ItemListInline>
                  <a href="/" aria-label="Link para a Twitch">
                    <IconTwitch />
                  </a>
                </ItemListInline>
                <ItemListInline>
                  <a href="/" aria-label="Link para a Instagram">
                    <IconInstagram />
                  </a>
                </ItemListInline>
                <ItemListInline>
                  <a href="/" aria-label="Link para a Twitter">
                    <IconTwitter />
                  </a>
                </ItemListInline>
              </ListInline>
            </Col>
          </Row>
        </Container>
      </Footer>
    </ProviderTheme>
  );
}

export default HomePage;
