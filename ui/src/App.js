import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import ContactUs from "./pages/ContactUs";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <>
        <Navbar />
        <Outlet />
        <Testimonials />
        <Footer />
      </>,
    children: [
      {
        path: "/",
        element: <Landing />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
