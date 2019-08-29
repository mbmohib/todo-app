import React, { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';
import { ArrowBack, Save } from '@material-ui/icons';
import PropTypes from 'prop-types';

import { Wrapper, Button } from 'views/ui';
import { useValidation } from 'hooks';

const AddEditTodo = ({ todoTitle, handleAddTodo, handleBackButton }) => {
  const [todo, setTodo] = useState('');
  const [validation, setValidation] = useValidation();

  useEffect(() => {
    if (todoTitle) {
      setTodo(todoTitle);
      setValidation(todoTitle);
    }
  }, [todoTitle]);

  const handleTodoChange = event => {
    const inputValue = event.target.value;
    setTodo(inputValue);
    setValidation(inputValue);
  };

  const handleSubmit = e => {
    e.preventDefault();

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
      <form onSubmit={handleSubmit}>
        <TextField
          error={!validation.isValid}
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!validation.isValid}
          >
            <Save />
            {todoTitle ? 'Update Todo' : 'Add Todo'}
          </Button>
        </Wrapper>
      </form>
    </Wrapper>
  );
};

AddEditTodo.propTypes = {
  todoTitle: PropTypes.string,
  handleAddTodo: PropTypes.func.isRequired,
  handleBackButton: PropTypes.func.isRequired,
};

export default AddEditTodo;
