import { createContext, useContext, useState } from 'react';

const BudgetContext = createContext(null);

export const useBudget = () => useContext(BudgetContext);

export const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false);

  const toggleBudgetMode = () => setBudgetMode((prev) => !prev);

  return (
    <BudgetContext value={{ budgetMode, toggleBudgetMode }}>
      {children}
    </BudgetContext>
  );
};
