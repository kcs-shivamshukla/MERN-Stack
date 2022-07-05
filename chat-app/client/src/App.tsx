import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';

// import LoggedInRoutes from './routes/loggedInRoutes';
// import NotLoggedInRoutes from './routes/NotLoggedInRoutes';

function App() {

  return (
      <Routes>
        {/* <Route element={<LoggedInRoutes />}>
          <Route path='/' element={<Dashboard />} />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route> */}

        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={ <Dashboard />} />

      </Routes>
  );
}

export default App;
