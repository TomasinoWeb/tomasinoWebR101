import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Example from './pages/example/Example';
import Application from './pages/Application/Application';
import R101 from './pages/R101/R101';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/application" element={<Application />}></Route>
          <Route exact path="/r101" element={<R101 />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
