import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import Header from '../components/Header';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        setProducts(response.data.products);
        console.log(products);
      } catch (error) {
        console.error('Error fetching products', error);
        // Handle error fetching products
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs only once, equivalent to componentDidMount

  return (
    <div className=''>
      <Header/>
      <div className='w-screen mx-auto'>
      <ProductList products={products} />
      </div>
    </div>
  );
};

export default Home;
