import { useEffect } from 'react';
import { IncrementalList } from '@/components/shared/IncrementalList';
import { Spinner } from '@/components/ui/Spinner';
import { useBudget } from '@/context/BudgetContext';
import { useProducts } from '../context/ProductsContext';
import { ProductList } from './ProductList';
import './ProductCatalog.css';

export const ProductCatalog = () => {
  const { state, loadProducts } = useProducts();
  const { budgetMode } = useBudget();

  useEffect(() => {
    if (state.step === 'idle') loadProducts();
  }, [state.step, loadProducts]);

  const handleReload = () => loadProducts();

  const render = () => {
    switch (state.step) {
      case 'loading':
        return <Spinner />;
      case 'error':
        return (
          <div role='alert'>
            <p>Products are currently unavailable. Please try again.</p>
            <button onClick={handleReload}>Retry</button>
          </div>
        );
      case 'success':
        const data = state.data;
        const filteredData = budgetMode
          ? data.filter((product) => product.price <= 30)
          : data;

        return (
          <IncrementalList
            batchSize={10}
            items={filteredData}
            renderList={(visibleItems) => (
              <ProductList products={visibleItems} />
            )}
          />
        );
      case 'idle':
      default:
        return null;
    }
  };

  return (
    <section
      className='product-catalog'
      aria-labelledby='product-catalog-title'
    >
      <h1 id='product-catalog-title' className='font-normal text-3xl'>
        Our Products
      </h1>

      {render()}
    </section>
  );
};
