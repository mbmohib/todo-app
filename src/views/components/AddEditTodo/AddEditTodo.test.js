import React from 'react';
import ReactDOM from 'react-dom';
import AddEditTodo from './AddEditTodo';

test('title', () => {
  const container = document.createElement('div');
  const fakeHandleAddTodo = jest.fn();
  const fakeHandleBackButton = jest.fn();

  ReactDOM.render(
    <AddEditTodo
      handleAddTodo={fakeHandleAddTodo}
      handleBackButton={fakeHandleBackButton}
    />,
    container
  );
  const form = container.querySelector('form');
  const { title } = form.elements;
  title.value = 'Buy Foods';

  const submit = new window.Event('submit');
  form.dispatchEvent(submit);

  expect(fakeHandleAddTodo).toHaveBeenCalledTimes(0);
});
