import { Col, Row } from "react-grid-system";
import { Card } from "../../components/Card/Card";
import { Outlet } from "react-router-dom";
import { RegistrationUserProvider } from "../../context/UserRegistration";

const LayoutBaseRegistration = () => {
    return (
        <RegistrationUserProvider>
            <Row justify="center">
                <Col xxx={6} xxl={6} xl={6} lg={6} md={8} sm={12} style={{ margin: '80px 0' }}>
                    <Card>
                        <Outlet />
                    </Card>
                </Col>
            </Row>
        </RegistrationUserProvider>
    );
}

export default LayoutBaseRegistration;