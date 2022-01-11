
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from './globalStyles';
import Sidebar from "./Components/Sidebar/Sidebar"
import Sandbox from "./Pages/Sandbox/Sandbox"
import Testing from "./Pages/Testing/Testing"
import { BrowserRouter as Router,Route,Switch, } from 'react-router-dom';
import Welcome from "./Pages/Welcome/Welcome"
import Main from "./Components/Main/Main";
import Timeline from "./Pages/Timeline/Timeline"
function App() {
  return (
    <div>
        <Router>
            <GlobalStyle />
            <Navbar />
            <Routes>
                <Route path="/Testing" exact component={<Testing/>} />
                <Route path="/Main" component={<Main/>} />
                <Route path="/Welcome" component={<Welcome/>} />
                <Route path="/Timeline" component={<Timeline/>} />
                <Route path="/Sandbox" component={<Sandbox/>} />
            </Routes> 
        </Router>
    </div>

  );
}

export default App;
