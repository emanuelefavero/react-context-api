import './Header.css';
import { NavLink, useLocation } from 'react-router';
import { paths } from '@/router/paths';
import { ProductsFiltersForm } from '@/features/products/filters/ProductsFiltersForm';

export const Header = ({ logo, navLinks = [] }) => {
  const { pathname } = useLocation();
  const isProductsPath = pathname === paths.products;

  return (
    <header className='header'>
      <div className='container'>
        {logo && <div className='logo font-semibold text-xl'>{logo}</div>}

        <div className='actions'>
          {isProductsPath && <ProductsFiltersForm />}

          {navLinks.length > 0 && (
            <nav aria-label='Main Navigation'>
              <ul className='route-list'>
                {navLinks.map((route) => (
                  <li key={route.to}>
                    <NavLink to={route.to} className='nav-link'>
                      {route.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};
