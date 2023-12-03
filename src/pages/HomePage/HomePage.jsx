import { Col, Container } from "react-grid-system";
import Banner from "./Banner/Banner";
import Block from "./Block";
import CardClient from "./Benefits/cards/CardClient";
import CardFreela from "./Benefits/cards/CardFreela";
import Chip from "../../components/Chip/Chip";
import { cardsClients, cardsFreelas, skills } from "./data";


const HomePage = () => {
  return (
    <>
      <Banner />
      <Container>
        <Block cards={cardsClients} title="Vantagens para contratantes">
          {cardsClients.map(card => <CardClient
            key={card.text}
            icon={card.icon}
            text={card.text} />)}
        </Block>
        <Block cards={cardsFreelas} title="Vantagens para freelas">
          {cardsFreelas.map(card => <CardFreela
            key={card.text}
            icon={card.icon}
            text={card.text} />)}
        </Block>
        <Block cards={cardsFreelas} title="Quais habilidades você encontra por aqui?">
          <Col sm={12}>
            {skills.map(skill =>
              <Chip key={skill}>{skill}</Chip>)}
          </Col>
        </Block>
      </Container>
    </>
  );
}

export default HomePage;