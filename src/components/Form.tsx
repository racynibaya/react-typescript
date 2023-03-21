import React, { FormEvent, ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }), // 2nd arg of min: customizing error message
  age: z
    .number({ invalid_type_error: 'Age field is required' })
    .min(18, { message: 'Age must be at least 18.' }),
});

// It is like defining interface
type FormData = z.infer<typeof schema>;

// for better development purposes
// interface FormData {
//   name: string;
//   age: number;
// }
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          {...register('name')}
          type='text'
          className='form-control'
          id='name'
        />
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          {...register('age', { valueAsNumber: true })}
          type='text'
          className='form-control'
          id='age'
        />
      </div>
      {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
