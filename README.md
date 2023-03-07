# What is this?

This project was developed as part of my React learning journey.

Different from the tutorial I used as reference, I used Vite for project creation and development as it is very lighter and faster than the proposed method.

## What you will see

- Hooks: useState, useEffetc, useNavigate, useParams
- BrowserRouter
- Axios
- Async function for fetching data
- uuid (lib for aleatory id creation)
- Functional components
- Reusable components
- Data manipulation (mapping, filtering and displaying elements)
- SASS

## Differences
As this project was originally created in 2021 there are some differences regarding the current react-router-dom@6.8.2 and the one used for the tutorial (react-router-dom@5.2.0):
   - useNavigate instead useHistory
   - BrowserRouter structure
      ```bash
         <BrowserRouter>
            <Routes>
               <Route 
               path="/" // Main route "Home"
               exact
               element={
               }
               />
            </Routes>
         </BrowserRouter>
      ```
   - I also changed some variables name to be clearer on its intentions
   - Included a short validation for empty input
   - Changed initial tasks status as red marked to better identify the incomplete tasks
   - The tasks displayed are provided by jsonplaceholder, to use your own data you may comment fetching and use the mock available in the project.

## Installation
You can clone, fork or download the project;

```bash
git clone https://github.com/rnvdeveloper/react_dpd_todolist
```

### Dependencies
Run this command to install dependencies of the project:

```bash
npm start
```

### Starting
Run this command to run server and after finished use the link provided to navigate:

```bash
npm run dev
```

### Source
Tutorial available on [Felipe Rocha](https://www.youtube.com/watch?v=ErjWNvP6mko).