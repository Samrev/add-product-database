// App.js
import React, { useState } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="container">
      <h1 className="title">Add Products to the Database</h1>
      <div className="form-container">
        <ProductForm onAddProduct={handleAddProduct} />
      </div>
      <ProductList products={products} />
    </div>
  );
};

export default App;
