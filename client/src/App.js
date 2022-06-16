import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Doctor from "./pages/doctor/Doctor";
import Login from "./pages/login/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/doctors" element={<List/>}/>
        <Route path="/doctors/:id" element={<Doctor/>}/> 
        <Route path="/login" element={<Login/>}/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
