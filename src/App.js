import './App.css';
import { Routes, Route} from 'react-router-dom';
import Header from "./component/Header";
import ProductListing from './component/ProductListing';
import ProductDetail from './component/ProductDetail';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/'  element={<ProductListing/>} />
        <Route path='/product/:productId'  element={<ProductDetail/>} />
        <Route> 404 Not Found </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
