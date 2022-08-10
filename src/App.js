import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App" style={{backgroundColor:"light blue"}}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
