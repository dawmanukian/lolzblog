import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Blogs from './pages/Blogs/Blogs';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Blogs />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
