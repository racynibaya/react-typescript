import React, { FormEvent, ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FieldValues } from 'react-hook-form/dist/types';

// for better development purposes
interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
          {...register('name', { minLength: 3 })}
          type='text'
          className='form-control'
          id='name'
        />
        {errors.name?.type === 'minLength' && (
          <p className='text-danger'>Minimun length of 3</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          {...register('age', { required: 'This is required' })}
          type='text'
          className='form-control'
          id='age'
        />
        {errors.age?.type === 'required' && (
          <p className='text-danger'>This is required</p>
        )}
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
