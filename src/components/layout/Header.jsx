import './Header.css';
import { NavLink } from 'react-router';
import { Button } from '@/components/ui/Button';
import { useBudget } from '@/context/BudgetContext';

export const Header = ({ logo, navLinks = [] }) => {
  const { budgetMode, toggleBudgetMode } = useBudget();

  return (
    <header className='header'>
      <div className='container'>
        {logo && <div className='logo font-semibold text-xl'>{logo}</div>}

        <div className='actions'>
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

          <Button
            variant={budgetMode ? Button.variant.warning : Button.variant.ghost}
            onClick={toggleBudgetMode}
            title={budgetMode ? 'Disable Budget Mode' : 'Enable Budget Mode'}
            aria-label={
              budgetMode ? 'Disable Budget Mode' : 'Enable Budget Mode'
            }
          >
            Budget Mode
          </Button>
        </div>
      </div>
    </header>
  );
};
