import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { ArrowBack, Save } from '@material-ui/icons';

import { Wrapper, Button } from 'views/ui';
import { useValidation } from 'hooks';

const AddEditTodo = ({ todoTitle, handleAddTodo, handleBackButton }) => {
  const [todo, setTodo] = useState('');
  const [validation, setValidation] = useValidation();

  useEffect(() => {
    console.log('AddEditTodo: UseEffect');
    if (todoTitle) {
      setTodo(todoTitle);
      console.log('AddEditTodo: UseEffect:setTodo');
    }

    return () => {
      console.log('AddEditTodo: UseEffect Cleanup');
    };
  }, [todoTitle]);

  const handleTodoChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setValidation(todo);

    if (validation.isValid) {
      handleAddTodo(todo);
    }
  };

  return (
    <Wrapper
      justify="center"
      width={{ xs: '100%', sm: '80%', md: '70%' }}
      mx="auto"
      mt={10}
    >
      {console.log('AddEditTodo: Render')}
      <form onSubmit={handleSubmit}>
        <TextField
          error={validation.isValid}
          fullWidth
          helperText={validation.message}
          id="standard-name"
          placeholder="Buy foods.."
          value={todo}
          onChange={handleTodoChange}
        />

        <Wrapper flex mt={2} justify="center">
          <Button
            variant="contained"
            color="default"
            mr={1}
            onClick={handleBackButton}
          >
            <ArrowBack />
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            <Save />
            {todoTitle ? 'Update Todo' : 'Add Todo'}
          </Button>
        </Wrapper>
      </form>
    </Wrapper>
  );
};

export default AddEditTodo;
