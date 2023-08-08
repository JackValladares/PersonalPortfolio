import './App.css';
import './Pages/Global Styling/Global.less';

import {useEffect, useState, useRef} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';
import Login from './Pages/LoginScreen';
import { UserProvider } from './GlobalStates';

function App() {
  const[date, setDate] = useState(1);

  return (
      <UserProvider>
          <Router>
              <div className="App">
                  <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/login" element={<Login />} />
                  </Routes>
              </div>

          </Router>
      </UserProvider>

  );
}

export default App;
