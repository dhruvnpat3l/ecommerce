import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Assuming you have a LoadingSkeleton component
import { STATUS } from '../utils/status'; // Assuming you've imported the STATUS constant

const LoadingSkeleton = () => {
  return (
    <div style={{ padding: '10px', margin: '10px', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
    </div>
  );
};

const ProductList = ({ products }) => {
  const [loadingStatus, setLoadingStatus] = useState(STATUS.LOADING);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const minPriceInitial = 0;
      const maxPriceInitial = Math.max(...products.map(product => product.price));

      setMinPrice(minPriceInitial.toString());
      setMaxPrice(maxPriceInitial.toString());
      setFilteredProducts(products);
      setLoadingStatus(STATUS.IDLE);
    }
  }, [products]);

  const handleFilterChange = () => {
    setLoadingStatus(STATUS.LOADING);

    // Apply filter logic based on minPrice and maxPrice
    let newFilteredProducts = products;

    if (minPrice !== '' && !isNaN(minPrice)) {
      newFilteredProducts = newFilteredProducts.filter(product => product.price >= parseInt(minPrice, 10));
    }

    if (maxPrice !== '' && !isNaN(maxPrice)) {
      newFilteredProducts = newFilteredProducts.filter(product => product.price <= parseInt(maxPrice, 10));
    }

    setFilteredProducts(newFilteredProducts);
    setLoadingStatus(STATUS.IDLE);
  };

  return (
    <div>
      {products.length > 0 && (
        <div className='p-2'>
          <label htmlFor="minPrice">Min Price:</label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            className='w-14'
            onChange={(e) => setMinPrice(e.target.value)}
          />

          <label htmlFor="maxPrice">Max Price:</label>
          <input
            type="number"
            id="maxPrice"
            className='w-14'
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <button className='p-2 border-2 border-black shadow-[3px_3px_0px_-0px_rgba(0,0,0,1)]' onClick={handleFilterChange}>Apply Filter</button>
        </div>
      )}

      {loadingStatus === STATUS.LOADING ? (
        Array.from({ length: 5 }).map((_, index) => <LoadingSkeleton key={index} />)
      ) : (
        <div>
          <div className='flex flex-wrap justify-center'>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
