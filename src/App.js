
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from './globalStyles';
import Sidebar from "./Components/Sidebar/Sidebar"
import Sandbox from "./Pages/Sandbox/Sandbox"
import Testing from "./Pages/Testing/Testing"
import { BrowserRouter as Router,Route,Routes, } from 'react-router-dom';
import Welcome from "./Pages/Welcome/Welcome"
import Main from "./Components/Main/Main";
import Timeline from "./Pages/Timeline/Timeline"
import SignUp from "./Pages/SignUp/SignUp"
function App() {
  return (

    
    <div>
        <Router>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Main/>} />
                <Route path="/Testing" exact element={<Testing/>} />
                <Route path="/Main" element={<Main/>} />
                <Route path="/Welcome" element={<Welcome/>} />
                <Route path="/Timeline" element={<Timeline/>} />
                <Route path="/Sandbox" element={<Sandbox/>} />
                <Route path="/SignUp" element={<SignUp/>} />
            </Routes> 
        </Router>
    </div>

  );
}

export default App;
