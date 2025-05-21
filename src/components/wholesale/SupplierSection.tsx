import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronRight } from 'lucide-react';
import { Supplier, Product } from '../../types';
import { suppliers } from '../../data/suppliers';
import ProductCarousel from './ProductCarousel';

const SupplierSection: React.FC = () => {
  const { t } = useTranslation();
  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(null);

  const handleSelectSupplier = (supplier: Supplier) => {
    setSelectedSupplier(supplier);
    
    // Scroll to products section
    setTimeout(() => {
      document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <section className="py-16 bg-white dark:bg-neutral-900" id="suppliers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white text-center mb-12">
          {t('wholesale.suppliers.title')}
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {suppliers.map((supplier) => (
            <div 
              key={supplier.id} 
              className="bg-neutral-50 dark:bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group cursor-pointer"
              onClick={() => handleSelectSupplier(supplier)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={supplier.logo} 
                  alt={supplier.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">{supplier.name}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2">{supplier.description}</p>
                <button className="flex items-center text-primary-blue">
                  {t('wholesale.suppliers.viewProducts')}
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {selectedSupplier && (
          <div id="products-section" className="pt-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
              {selectedSupplier.name} {t('wholesale.suppliers.title').toLowerCase()}
            </h3>
            <ProductCarousel products={selectedSupplier.products} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SupplierSection;