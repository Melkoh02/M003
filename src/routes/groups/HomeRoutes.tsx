import { Route, Routes, Navigate } from 'react-router-dom';
import HomeScreen from '../../pages/HomeScreen';

export default function HomeRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<HomeScreen />} />
      {/* Default to /home for unknown private paths */}
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
