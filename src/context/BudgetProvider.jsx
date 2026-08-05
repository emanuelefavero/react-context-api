import { useState } from 'react';
import { BudgetContext } from './BudgetContext';

export const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false);

  const toggleBudgetMode = () => setBudgetMode((prev) => !prev);

  return (
    <BudgetContext value={{ budgetMode, toggleBudgetMode }}>
      {children}
    </BudgetContext>
  );
};
