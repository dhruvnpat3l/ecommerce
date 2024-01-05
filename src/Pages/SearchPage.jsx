import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import Header from '../components/Header';
import { STATUS } from '../utils/status'; // Make sure to import the STATUS constant

const SearchPage = () => {
  const { searchTerm } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(STATUS.LOADING);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${searchTerm}`);
        const data = await response.json();

        if (data && data.products && data.products.length > 0) {
          setProducts(data.products);
          setLoadingStatus(STATUS.SUCCEEDED);
        } else {
          // If there are no products, set an empty array
          setProducts([]);
          setLoadingStatus(STATUS.IDLE);
        }
      } catch (error) {
        console.error('Error fetching search results:', error);
        setLoadingStatus(STATUS.FAILED);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div>
      <Header />
      {loadingStatus === STATUS.LOADING && <div className='items-center'>Loading...</div>}

      {loadingStatus === STATUS.SUCCEEDED && (
        <ProductList products={products} />
      )}

      {loadingStatus === STATUS.IDLE && (
        <div className="py-10 pt-28 bg-white-400 w-screen flex-auto">
          <div
            className="mx-auto my-auto block p-10  border-2 border-black bg-white-900  shadow-[0_4px_0_0_rgba(0,0,0,1)] w-max  flex-auto"
            aria-modal="true"
            aria-label="Item added to your cart"
            role="dialog"
            tabIndex="-1"
          >
            <div className="flex items-start justify-between">
              <h2 className="flex items-center pb-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="ml-2 text-sm"> No products found for '{searchTerm}' </span>
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
