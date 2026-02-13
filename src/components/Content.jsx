import styled from "styled-components";
import PropTypes from "prop-types";

/* 🔹 styled-components */
const Card = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #555;
`;

/* 🔹 React 컴포넌트 */
function Content({ content }) {
  return (
    <Card>
      <Title>{content.title}</Title>
      <Text>{content.text}</Text>
    </Card>
  );
}

/* 🔹 props 검증 추가 */
Content.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Content;


