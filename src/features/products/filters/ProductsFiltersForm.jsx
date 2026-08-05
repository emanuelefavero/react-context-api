import { cx } from '@/lib/utils';
import { Input } from '@/components/ui/Input';
import { useProductsFilters } from '../context';
import './ProductsFiltersForm.css';

export const ProductsFiltersForm = (className, ...props) => {
  const { filters, updateMaxPrice } = useProductsFilters();
  const maxPrice = filters.maxPrice ?? '';

  const handleMaxPriceChange = (event) => {
    const value = event.target.valueAsNumber;
    const newMaxPrice = isNaN(value) ? null : value;
    updateMaxPrice(newMaxPrice);
  };

  return (
    <form className={cx('products-filters-form', className)} {...props}>
      <div className='form-group'>
        <label htmlFor='max-price' className='sr-only'>
          Max Price
        </label>
        <Input
          type='number'
          value={maxPrice}
          onChange={handleMaxPriceChange}
          id='max-price'
          name='max-price'
          className='input'
          placeholder='Max price'
          aria-label='Filter products by maximum price'
          min='0'
          step='10'
        />
      </div>
    </form>
  );
};
