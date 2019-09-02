import React from 'react';
import AddEditTodo from './AddEditTodo';
import { render, fireEvent } from '@testing-library/react';

test('Pass new todo value when successfully submitted', () => {
  const fakeHandleAddTodo = jest.fn();
  const fakeHandleBackButton = jest.fn();
  const { container, getByTestId, getByText } = render(
    <AddEditTodo
      handleAddTodo={fakeHandleAddTodo}
      handleBackButton={fakeHandleBackButton}
    />
  );
  const form = container.querySelector('form');
  const todoInput = getByTestId('add-edit-todo');
  const submitButton = getByText(/Todo/i);

  fireEvent.change(todoInput, { target: { value: 'Do testing' } });
  fireEvent.submit(form);

  expect(submitButton.parentNode.type).toBe('submit');
  expect(submitButton.textContent).toBe('Add Todo');
  expect(fakeHandleAddTodo).toHaveBeenCalledTimes(1);
  expect(fakeHandleAddTodo).toHaveBeenCalledWith('Do testing');
});

test('Should not submit if input filed is empty', () => {
  const fakeHandleAddTodo = jest.fn();
  const fakeHandleBackButton = jest.fn();
  const { container, getByTestId, getByText } = render(
    <AddEditTodo
      handleAddTodo={fakeHandleAddTodo}
      handleBackButton={fakeHandleBackButton}
    />
  );
  const form = container.querySelector('form');
  const todoInput = getByTestId('add-edit-todo');
  const submitButton = getByText(/Todo/i);

  fireEvent.change(todoInput, { target: { value: '' } });
  fireEvent.submit(form);

  expect(submitButton.parentNode.type).toBe('submit');
  expect(submitButton.textContent).toBe('Add Todo');
  expect(fakeHandleAddTodo).toHaveBeenCalledTimes(0);
});

test('Pass updated todo value if todo value passed as props and submitted', () => {
  const fakeHandleAddTodo = jest.fn();
  const fakeHandleBackButton = jest.fn();
  const fakeTodoTitle = 'Do testing';

  const { container, getByTestId, getByText } = render(
    <AddEditTodo
      todoTitle={fakeTodoTitle}
      handleAddTodo={fakeHandleAddTodo}
      handleBackButton={fakeHandleBackButton}
    />
  );
  const form = container.querySelector('form');
  const todoInput = getByTestId('add-edit-todo');
  const submitButton = getByText(/Todo/i);

  fireEvent.change(todoInput, { target: { value: `${fakeTodoTitle} more` } });
  fireEvent.submit(form);

  expect(submitButton.parentNode.type).toBe('submit');
  expect(submitButton.textContent).toBe('Update Todo');
  expect(fakeHandleAddTodo).toHaveBeenCalledTimes(1);
  expect(fakeHandleAddTodo).toHaveBeenCalledWith(`${fakeTodoTitle} more`);
});
