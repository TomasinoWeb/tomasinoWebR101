import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Example from './pages/example/Example';
import Application from './pages/Application/Application';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/application" element={<Application />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
