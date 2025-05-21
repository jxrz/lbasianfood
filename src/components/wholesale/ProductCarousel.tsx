import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { Product } from '../../types';

interface ProductCarouselProps {
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState<Product | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const visibleProducts = () => {
    const numVisible = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;
    let result = [];
    
    for (let i = 0; i < numVisible; i++) {
      const index = (currentIndex + i) % products.length;
      result.push(products[index]);
    }
    
    return result;
  };

  return (
    <div className="relative">
      <div className="flex justify-between mb-8">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Previous product"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
          aria-label="Next product"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="flex gap-6 justify-center">
        {visibleProducts().map((product, index) => (
          <motion.div
            key={`${product.id}-${index}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden w-full max-w-sm"
            onMouseEnter={() => setHoveredProduct(product)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="h-64 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" 
              />
            </div>
            <div className="p-4">
              <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">{product.name}</h4>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">Category: {product.category}</p>
            </div>
            
            {/* Product description overlay on hover */}
            {hoveredProduct?.id === product.id && (
              <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center p-6 transition-opacity duration-300">
                <div className="text-white text-center">
                  <Info size={24} className="mx-auto mb-3" />
                  <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                  <p className="text-sm opacity-90">{product.description}</p>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full ${
              currentIndex === index ? 'bg-primary-blue' : 'bg-neutral-300 dark:bg-neutral-600'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;