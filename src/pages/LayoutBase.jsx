import { Col, Container, Row } from "react-grid-system";
import { Header } from "../components/Header/Header";
import { FreelandoLogo } from "../components/Icons/FreelandoLogo";
import { Link } from "../components/Link/Link";
import { Footer } from "../components/Footer/Footer";
import { Typography } from "../components/Typography/Typography";
import { ListInline } from "../components/List/ListInline";
import { ItemListInline } from "../components/List/ItemListInline";
import { IconInstagram } from "../components/Icons/IconInstagram";
import { IconTwitter } from "../components/Icons/IconTwitter";
import { IconWhatsApp } from "../components/Icons/IconWhatsApp";
import { IconTwitch } from "../components/Icons/IconTwitch";
import { Outlet } from "react-router-dom";

const LayoutBase = ({ children }) => {
    return (
        <>
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
            <Outlet />
            {children}
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
        </>
    )
}
export default LayoutBase;