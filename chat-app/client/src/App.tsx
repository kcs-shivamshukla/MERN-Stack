import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import LoggedInRoutes from './routes/loggedInRoutes';
import NotLoggedInRoutes from './routes/NotLoggedInRoutes';

// type UserProps = {
//   path: string,
//   element: object,
//   exact: boolean
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
