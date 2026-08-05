import './Header.css';
import { NavLink, useLocation } from 'react-router';
import { Button } from '@/components/ui/Button';
import { useBudget } from '@/context/BudgetContext';
import { paths } from '@/router/paths';

export const Header = ({ logo, navLinks = [] }) => {
  const { budgetMode, toggleBudgetMode } = useBudget();
  const { pathname } = useLocation();
  const isProductsPath = pathname === paths.products;

  return (
    <header className='header'>
      <div className='container'>
        {logo && <div className='logo font-semibold text-xl'>{logo}</div>}

        <div className='actions'>
          {isProductsPath && (
            <Button
              variant={
                budgetMode ? Button.variant.warning : Button.variant.ghost
              }
              onClick={toggleBudgetMode}
              title={budgetMode ? 'Disable Budget Mode' : 'Enable Budget Mode'}
              aria-label={
                budgetMode ? 'Disable Budget Mode' : 'Enable Budget Mode'
              }
            >
              Budget Mode
            </Button>
          )}

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
