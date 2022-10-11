import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItem from "./AddItem";

function App() {
  return (
    <div className="App ">
      <div className="App-header ">
     <div className="heading">
     <h1 className="color:black">To-Do <span>List.....📝</span></h1>
     </div>
       
        <AddItem />
      </div>
    </div>
  );
}

export default App;
