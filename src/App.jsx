import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import HomePage from './pages/main/HomePage';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import WorkoutScheduler from './components/WorkoutScheduler';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: 'register', element: <Register /> },
      { path: 'login', element: <Login /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'workoutScheduler', element: <WorkoutScheduler /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
