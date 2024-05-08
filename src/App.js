import "./App.css";
import Wrapper from "./component/Wrapper/Wrapper";
import Route from "./Routes";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
    <div className="App">
      <Wrapper>
        <Route />
      </Wrapper>
    </div>
  );
}

export default App;
