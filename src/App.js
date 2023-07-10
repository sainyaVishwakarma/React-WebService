
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainHeaderNavBar from './components/MainHeaderNavBar';
import HomeComponent from './components/HomeComponent';
import ProductTable from './components/ProductTable';
import ProductForm from './components/ProductForm';
import ProductEdit from './components/ProductEdit';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     
    <MainHeaderNavBar></MainHeaderNavBar>
    <Routes>
      <Route path='/home' element={<HomeComponent></HomeComponent>}></Route>
      <Route path="/table" element={<ProductTable></ProductTable>} ></Route>
      <Route path="/form" element={<ProductForm></ProductForm>} ></Route>
      <Route path="/edit/:pid" element={<ProductEdit></ProductEdit>} ></Route>
    </Routes>
    </div>
  );
}

export default App;
