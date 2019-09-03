# TODO APP

### A simple Todo App showing the implementation of React Hooks, Redux using Feature First (modified) folder structure

## Live

Demo [https://react-hooks-redux-todoapp.netlify.com/](https://react-hooks-redux-todoapp.netlify.com/)

## Built With

- [React Hooks](https://reactjs.org/)
- [React Router](https://github.com/ReactTraining/react-router)
- [styled-components](https://www.styled-components.com/)
- [Material UI](https://material-ui.com/)
- [Redux](https://redux.js.org/)

## What I have done

- Use React Hooks
- Use Redux middleware for handling API request, loading and error state.
- Use Redux middleware for handling duplicate API requests.
- Use a "Render Component" for dispatching API request, handling Loading and error UI state and any future fetching API
- Used a modified Feature first folder structure where the src folder mainly divided into 'state' (state folder is following the Redux Duck pattern) and 'view' with necessaries folders like routes, util, etc to handle overlapping Actions, Reducers with the feature first approach.
- Created a UI folder in 'view' folder that can be easily exported for use in other projects. The UI folder is following the Atomic Design pattern.
- Used React Router for routing. (Although this type of App can have a better UX without the router, but wanted to show the implementation of React Router)
- Implemented Unit testing

# How to use

- > \$ git clone [repo-link]

- > \$ npm install

- > npm start
