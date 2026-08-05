import { RouterProvider } from 'react-router';
import { router } from './router/router';
import { ProductsProvider } from './features/products/context/ProductsProvider';
import { BudgetProvider } from './context/BudgetContext';

export const App = () => (
  <BudgetProvider>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </BudgetProvider>
);
