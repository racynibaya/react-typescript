import React from 'react';
import { optional, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FieldValues } from 'react-hook-form';
import categories from '../categories';

const schema = z.object({
  description: z
    .string()
    .min(3, { message: 'Description must at least 3' })
    .max(50, { message: 'Description must be less than 50 characters' }),
  amount: z
    .number({ invalid_type_error: 'Amount is required' })
    .min(0.1)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: 'Category is required' }), // modifying the error message of enum
  }),
});

export type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (expenses: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit(data => {
          onSubmit(data);
          reset();
        })}
      >
        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            {...register('description')}
            type='text'
            className='form-control'
            id='description'
          />
          {errors.description && (
            <p className='text text-danger'>{errors.description.message}</p>
          )}
        </div>

        <div className='mb-3'>
          <label htmlFor='amount' className='form-label'>
            Amount
          </label>
          <input
            {...register('amount', { valueAsNumber: true })}
            type='number'
            className='form-control'
            id='amount'
          />
          {errors.amount && (
            <p className='text text-danger'>{errors.amount.message}</p>
          )}
        </div>
        <div className='mb-3'>
          <label htmlFor='category' className='form-label'>
            Category
          </label>
          <select
            id='category'
            className='form-select'
            aria-label='Default select example'
            {...register('category')}
          >
            <option value=''>Category</option>
            {categories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className='text text-danger'>{errors.category.message}</p>
          )}
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </>
  );
};

export default ExpenseForm;
