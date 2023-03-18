import React, { FormEvent, ChangeEvent, useState } from 'react';

const Form = () => {
  // It became Controlled component because every value is controlled by React not by DOM anymore: setting value of input using the state.
  const [person, setPerson] = useState({
    name: '',
    age: '',
  });

  const handleSubmit = (event: FormEvent) => {
    // prevent the default behavior of reloading the entire page
    event.preventDefault();

    console.log(person);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [event.target.id]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          type='text'
          className='form-control'
          id='name'
          onChange={handleChange}
          value={person.name}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          type='text'
          className='form-control'
          id='age'
          value={person.age}
          onChange={handleChange}
        />
      </div>
      <button className='btn btn-primary' type='submit'>
        Submit
      </button>
    </form>
  );
};

export default Form;
