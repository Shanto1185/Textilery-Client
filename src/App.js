import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header'
import ContactUs from './Pages/Contact/ContactUs/ContactUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import Home from './Pages/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/contact_us' element={<ContactUs />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div >
  );
}

export default App;
