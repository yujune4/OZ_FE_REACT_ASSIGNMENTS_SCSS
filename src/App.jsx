import styled from "styled-components";
import "./App.css";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

const Main = styled.main`
  padding: 40px;
`;

const Section = styled.section`
  display: grid;
  gap: 20px;
`;
function App() {
  return (
    <Main>
      <Header />
      <Section>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </Section>
    </Main>
  );
}

export default App;
