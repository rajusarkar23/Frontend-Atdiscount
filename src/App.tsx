import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { Navbar } from "./components/page-components/Navbar";
import { Footer } from "./components/page-components/Footer";
import Login from "./pages/user/Login";
import Register from "./pages/user/Register";
import VerifyOtp from "./pages/user/VerifyOtp";
import Profile from "./pages/user/Profile";
import Order from "./pages/user/Order";
import ManageAddress from "./pages/user/ManageAddress";
import SellerRegistration from "@/pages/seller/Register";
import SellerOtpVerify from "@/pages/seller/VerifyOtp";
import Landing from "./pages/seller/Landing";
import SellerLogin from "@/pages/seller/Login"
import { SellerNavbar } from "./components/page-components/seller/SellerNavbar";
import Dashboard from "./pages/seller/Dashboard";
import Product from "./pages/Product";
import ShowAllProducts from "./pages/seller/ShowAllProducts";
import SProduct from "./pages/seller/SProduct";
import Buy from "./pages/Buy";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/login",
    element: (
      <>
        <Navbar />
        <Login />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/register",
    element: (
      <>
        <Navbar />
        <Register />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/verify-otp",
    element: (
      <>
        <Navbar />
        <VerifyOtp />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/profile",
    element: (
      <>
        <Navbar />
        <Profile />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/orders",
    element: (
      <>
        <Navbar />
        <Order />
        <Footer />
      </>
    ),
  },
  {
    path: "/user/manage-address",
    element: (
      <>
        <Navbar />
        <ManageAddress />
        <Footer />
      </>
    ),
  },

  //seller paths
  {
    path: "/seller/h",
    element: (
      <>
        <SellerNavbar />
        <Landing />
        <Footer />
      </>
    ),
  },
  {
    path: "/seller/register",
    element: (
      <>
        <SellerNavbar />
        <SellerRegistration />
        <Footer />
      </>
    ),
  },
  {
    path: "/seller/verify-otp",
    element: (
      <>
        <SellerNavbar />
        <SellerOtpVerify />
        <Footer />
      </>
    ),
  },
  {
    path: "/seller/login",
    element: (
      <>
        <SellerNavbar />
        <SellerLogin />
        <Footer />
      </>
    )
  },
  {
    path: "/seller/dashboard",
    element: (
      <>
        <SellerNavbar />
        <Dashboard />
        <Footer />
      </>
    )
  },
  {
    path: "/product/:id/:id",
    element: (
      <>
        <Navbar />
        <Product />
        <Footer />
      </>
    )
  },
  {
    path: "/s/product/:id/:id",
    element: (
      <>
        <SellerNavbar />
        <SProduct />
        <Footer />
      </>
    )
  },
  {
    path: "/seller/all-products",
    element: (
      <>
      <SellerNavbar />
      <ShowAllProducts />
      <Footer />
      </>
    )
  },
  {
    path: "/buy/:id/:id",
    element: (
      <>
      <Navbar />
      <Buy />
      <Footer />
      </>
    )
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
