import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import AddItem from './AddItem';
import AddItem from "./AddItem";
import ListItem from "./ListItem";

function App() {
  return (
    <div className="App ">
      <div className="App-header ">
        <h2>React Crud Operation.....</h2>
        <AddItem />
      </div>
    </div>
  );
}

export default App;
