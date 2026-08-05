import { RouterProvider } from 'react-router';
import { router } from './router/router';
import {
  ProductsProvider,
  ProductsFiltersProvider,
} from './features/products/context';

export const App = () => (
  <ProductsFiltersProvider>
    <ProductsProvider>
      <RouterProvider router={router} />
    </ProductsProvider>
  </ProductsFiltersProvider>
);
