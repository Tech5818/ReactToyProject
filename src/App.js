import styled from "styled-components"
import Main from "./component/Main";

function App() {
  return (
    <>
      <StyledCalc>
        <Main/>
      </StyledCalc>
    </>
  );
}

const StyledCalc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

export default App;
