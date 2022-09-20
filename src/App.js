import "./reset.css";
import "./styles.css";
import Header from "./Header";
import HeadInfo from "./HeadInfo";

const App = () => {
  return (
    <div className="App">
      <div className="top">
      <div className="black"></div>
        <Header />
        <HeadInfo />
      </div>
      
    </div>
  );
};

export default App;
