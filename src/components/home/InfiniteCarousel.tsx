import React from 'react';
import { suppliers } from '../../data/suppliers';

const InfiniteCarousel: React.FC = () => {
  // Duplicate the suppliers array to create a seamless loop
  const duplicatedSuppliers = [...suppliers, ...suppliers];

  return (
    <div className="bg-white dark:bg-neutral-900 py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-2">Our Trusted Suppliers</h2>
        <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          We partner with Korea's premier food manufacturers to bring authentic flavors to your table
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {duplicatedSuppliers.map((supplier, index) => (
            <div key={`${supplier.id}-${index}`} className="flex flex-col items-center justify-center mx-8 min-w-[200px]">
              <img 
                src={supplier.logo} 
                alt={supplier.name} 
                className="w-20 h-20 object-cover rounded-full mb-4"
              />
              <span className="text-neutral-800 dark:text-white font-medium">{supplier.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteCarousel;