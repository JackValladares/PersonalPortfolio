import './App.css';
import './Pages/Global Styling/Global.less';

import {useEffect, useState, useRef} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from './Pages/HomePage';

function App() {
  const[date, setDate] = useState(1);





  return (
    <Router>
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/resume" element={<HomePage />} />
            </Routes>
        </div>

    </Router>
  );
}

export default App;
