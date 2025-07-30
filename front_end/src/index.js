import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Welcome from './jsx/welcome';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Login from './jsx/login';
import Register from './jsx/register';
import Profile from './jsx/Profile'
import ViewUsers from './jsx/ViewUsers'
import ProtectedRoute from './routes/ProtectedRoute';
import { Provider } from 'react-redux';
import { store } from './store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <App/> } >
              <Route index element={ <Welcome/> }/>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path='profile' element={ <ProtectedRoute><Profile/></ProtectedRoute>  }/>
              <Route path='ViewUsers' element={ <ProtectedRoute><ViewUsers/></ProtectedRoute>  }/>
            </Route>
          </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

