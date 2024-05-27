import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home'
import LoginRecruiter from './pages/Auth/Recruiter/LoginRecruiter';
import LoginWorker from './pages/Auth/Worker/LoginWorker';
import RegisterRecruiter from './pages/Auth/Recruiter/RegisterRecruiter';
import RegisterWorker from './pages/Auth/Worker/RegisterWorker';
import RequestReset from './pages/Auth/ResetPassword.jsx/RequestReset';
import InputOtp from './pages/Auth/ResetPassword.jsx/InputOtp';
import InputNewPassword from './pages/Auth/ResetPassword.jsx/InputNewPassword';
import HomeRecruiter from './pages/Recruiter/HomeRecruiter';
// import Notification from './components/Notification'
import Notifikasipage from './components/Notifikasipage';
import Hire from './pages/Recruiter/Hire';
import Portfolio from './pages/Recruiter/Portfolio';
import LandingPage from './pages/LandingPage';
import EditProfileCompany from './pages/Recruiter/EditProfile';
import EditProfileWorker from './pages/Worker/EditProfile';
import ProtectedRoute from './components/ProtectedRoute';
import Forbidden from './pages/Forbidden';
import MyChat from './pages/MyChat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route placement */}
        {/* Home */}
        <Route path="/" exact element={<LandingPage />} />

        {/* Chat */}
        <Route path="/mychat" element={<MyChat />} />

        {/* Login */}
        <Route path="/login/recruiter" element={<LoginRecruiter />} />
        <Route path="/login/worker" element={<LoginWorker />} />

        {/* Register */}
        <Route path="/register/recruiter" element={<RegisterRecruiter />} />
        <Route path="/register/worker" element={<RegisterWorker />} />

        {/* Reset Password  */}
        <Route path="/resetpassword" element={<RequestReset />} />
        <Route path="/otp" element={<InputOtp />} />
        <Route path="/newpassword" element={<InputNewPassword />} />

        {/* Perusahaan / Recruiter Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <HomeRecruiter />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hire"
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <Hire />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hire/:id"
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <Hire />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portfolio"
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <Portfolio />
            </ProtectedRoute>
          }
        />
        <Route
          path="/portfolio/:id"
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <Portfolio />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editcompany"
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <EditProfileCompany />
            </ProtectedRoute>
          }
        />
        <Route
          path="/notification"
          element={
            <ProtectedRoute allowedRoles={['recruiter']}>
              <Notifikasipage />
            </ProtectedRoute>
          }
        />
        {/* Worker Routes */}
        <Route
          path="/editworker"
          element={
            <ProtectedRoute allowedRoles={['worker']}>
              <EditProfileWorker />
            </ProtectedRoute>
          }
        />
        {/* Forbidden Route */}
        <Route path="/forbidden" element={<Forbidden />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
