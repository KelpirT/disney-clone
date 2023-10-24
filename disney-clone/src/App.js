import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './page/Login/Login';
import Header from './components/Header';
// import Router from './Routes/route';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Login></Login>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
