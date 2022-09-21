import "./reset.css";
import "./styles.css";
import Header from "./Header";
import HeadInfo from "./HeadInfo";
import Content from "./Content";
import Questions from "./Questions";

const App = () => {
  return (
    <div className="App">
      <div className="top">
      <div className="black"></div>
        <Header />
        <HeadInfo />
      </div>
      <Content />
      <Questions />
    </div>
  );
};

export default App;
