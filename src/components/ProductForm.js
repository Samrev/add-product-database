
import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct({
      productName,
      productDescription
    });
    setProductName('');
    setProductDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Product Name" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      <textarea 
        placeholder="Product Description" 
        value={productDescription} 
        onChange={(e) => setProductDescription(e.target.value)} 
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
