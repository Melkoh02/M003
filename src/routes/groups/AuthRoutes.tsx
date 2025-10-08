import { Route, Routes, Navigate } from 'react-router-dom';
import LoginScreen from '../../pages/LoginScreen';
import SignUpScreen from '../../pages/SignUpScreen';
import ForgotPassword from '../../pages/ForgotPassword';

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/sign-up" element={<SignUpScreen />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
