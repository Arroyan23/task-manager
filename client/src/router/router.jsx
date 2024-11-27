// halaman untuk mengatur router
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../pages/login";
import { SignUp } from "../pages/signup";
import { Dashboard } from "../pages/dashboard";
import ProtectedRoute from "../components/security/protectedroute";
import { DebugEmail } from "../pages/debugemail";
import { OtpPage } from "../pages/otppage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/logindebug",
    element: <DebugEmail />,
  },
  {
    path: "/otp-verify",
    element: <OtpPage />,
  },
]);
