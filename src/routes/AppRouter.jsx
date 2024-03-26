import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginForm from "../layout/LoginForm";
import RegisterForm from "../layout/RegisterForm";
import ProductForm from "../layout/ProductForm";
import ShowUser from "../layout/ShowUser";
import useAuth from "../hooks/useAuth";
import UserHome from "../layout/UserHome";
import Header from "../layout/Header";
import Card from "../layout/Card";
import AddProduct from "../layout/AddProduct";
import Order from "../layout/Order";
import Payment from "../layout/Payment";
import ProfilePang from "../layout/ProfilePang";
import AdminMenu from "../admin/AdminMenu";
import AdminDashboard from "../admin/AdminDashboard";
import AdminOrdering from "../admin/AdminOrdering";
import AdminTransaction from "../admin/AdminTransaction";
import AdminMember from "../admin/AdminMember";
import AdminHome from "../admin/AdminHome";
import AdminProfile from "../admin/AdminProfile";
import OrderComplete from "../layout/OrderComplete";
import Home from "../layout/Home";




const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      {/* <Header /> */}
      <Outlet />
      </>

    ),
    children: [
      { index: true, element: <LoginForm /> },
      { path: "/register", element: <RegisterForm /> },
    ],
  },
]);

const userRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      { index: true, element:  <UserHome />},
      { path: "/home", element: <UserHome/> },
      { path: "/new", element: <Order/> },
      { path: "/card", element: <Card /> },
      { path: "/add", element: <AddProduct /> },
      { path: "/pay", element: <Payment /> },
      { path: "/pro", element: <ProductForm /> },
      { path: "/user", element: <ShowUser /> },
      { path: "/file", element: <ProfilePang /> },
      { path: "/com", element: <OrderComplete /> },
      { path: "/ho", element: < Home/> },
    ],
  },
]);

const adminRouter = createBrowserRouter([
  {
    path: '/',
    element: <div className='flex flex-row px-4 py-6 gap-x-4'>
      <AdminMenu/>
      <Outlet />
    </div>,
    children: [
      { index: true, element: <AdminMenu /> },
      { path: '/AdminMenu', element: <AdminMenu /> },
      { path: '/AdminDashboard', element: <AdminDashboard to='/' /> },
      { path: '/AdminOrdering', element: <AdminOrdering /> },
      { path: '/AdminTransaction', element: <AdminTransaction to='/' /> },
      { path: '/AdminMember', element: <AdminMember /> },
      { path: '/AdminProfile', element: <AdminProfile /> },
    ]
  }
])


export default function AppRouter() {
  const { user } = useAuth()
  const finalRouter = !user?.id ? guestRouter : user.role === 'ADMIN' ? adminRouter : userRouter
  return (
    <>
      <RouterProvider router={finalRouter} />
    </>
  )
}