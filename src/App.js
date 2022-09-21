import "./reset.css";
import "./styles.css";
import Header from "./Header";
import HeadInfo from "./HeadInfo";
import Content from "./Content";
import Questions from "./Questions";
import Footer from "./Footer";

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
      <Footer />
    </div>
  );
};

export default App;
