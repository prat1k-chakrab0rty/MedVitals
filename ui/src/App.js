import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import Layout from "./Layout";
import Appointments from "./pages/Appointments";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import MyPatients from "./pages/MyPatients";
import Requests from "./pages/Requests";
import Messages from "./pages/Messages";
import Payments from "./pages/Payments";
import Blogs from "./pages/Blogs";
import PatientHistory from "./pages/PatientHistory";
import Blog from "./pages/Blog";
import AddBlog from "./pages/AddBlog";
import FellowDoctors from "./pages/FellowDoctors";
import DoctorProfile from "./pages/DoctorProfile";
import ConsultationSummary from "./pages/ConsultationSummary";
import MyProfile from "./pages/MyProfile";
import NotificationSettings from "./pages/NotificationSettings";
import Notifications from "./pages/Notifications";

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
        path: "",
        element: <Landing />
      },
      {
        path: "/contact-us",
        element: <ContactUs />
      },
    ]
  },
  {
    path: "/app/",
    element:
      <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to="dashboard" replace />
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "myProfile",
        element: <MyProfile />,
      },
      {
        path: "notificationSettings",
        element: <NotificationSettings />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "fellowDoctors",
        element: <FellowDoctors />,
      },
      {
        path: "doctor",
        element: <DoctorProfile />,
      },
      {
        path: "appointments",
        element: <Appointments />
      },
      {
        path: "consultationSummary",
        element: <ConsultationSummary />
      },
      {
        path: "my-patients",
        element: <MyPatients />
      },
      {
        path: "requests",
        element: <Requests />
      },
      {
        path: "messages",
        element: <Messages />
      },
      {
        path: "blogs",
        element: <Blogs />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "addBlog",
        element: <AddBlog />
      },
      {
        path: "payments",
        element: <Payments />
      },
      {
        path: "patientHistory",
        element: <PatientHistory />
      },
    ]
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
