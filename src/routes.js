import { Navigate } from 'react-router-dom';
import DashboardLayout from './components/DashboardLayout';
import MainLayout from './components/MainLayout';
import Account from './pages/Account';
import CustomerList from './pages/CustomerList';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductList from './pages/ProductList';
import User from './pages/User';
import Settings from './pages/Settings';

const auth = localStorage.getItem("isAuth")

const ProtectRoute = [
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: 'user', element: <User /> },
      { path: 'customers', element: <CustomerList /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'products', element: <ProductList /> },
      { path: 'setting', element: <Settings /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
];

const PublicRoute = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
]

export default auth ? ProtectRoute : PublicRoute;
