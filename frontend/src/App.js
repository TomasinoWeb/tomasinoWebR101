import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Example from './pages/example/Example';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Example />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
