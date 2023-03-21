import { useState } from 'react';
import ExpenseList from './expense-tracker/components/ExpenseList';
import {
  Alert,
  Button,
  Card,
  CardList,
  ExpandableText,
  Form,
  Like,
  ListGroup,
  Message,
  User,
} from './components';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm, {
  ExpenseFormData,
} from './expense-tracker/components/ExpenseForm';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'aaa', amount: 10, category: 'Utilities' },
    { id: 2, description: 'bbb', amount: 10, category: 'Utilities' },
    { id: 3, description: 'ccc', amount: 10, category: 'Groceries' },
    { id: 4, description: 'ddd', amount: 10, category: 'Entertainment' },
  ]);

  const onDelete = (id: number) =>
    setExpenses(expenses.filter(e => e.id !== id));

  const catFilteringHandler = (category: string) => {
    setSelectedCategory(category);
  };

  const onSubmit = (expense: ExpenseFormData) =>
    setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);

  const visibleExpense = selectedCategory
    ? expenses.filter(e => e.category === selectedCategory)
    : expenses;

  return (
    <div className='App'>
      <div className='mb-3'>
        <ExpenseForm onSubmit={onSubmit} />
      </div>
      <div className='mb-3'>
        <ExpenseFilter onSelectCategory={catFilteringHandler} />
      </div>
      <ExpenseList expenses={visibleExpense} onDelete={onDelete} />
    </div>
  );
};

export default App;
