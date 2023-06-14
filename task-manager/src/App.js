import './App.css';
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Tasks from './components/Tasks/Tasks';
import { TaskProvider } from './contexts/TaskContext';
import Login from './components/User/Login/Login';
import Register from './components/User/Register/Register';
import Logout from './components/User/Logout/Logout';
import Navigation from './components/Navigation/Navigation';
import Profile from './components/User/Profile/Profile';
import EditUser from './components/User/Edit/Edit';
import RouteGuardIsAuthenticated from './components/Guards/RouteGuardIsAuthenticated';
import RouteGuardIsNotAuthenticated from './components/Guards/RouteGuardIsNotAuthenticated';

function App() {
  return (
    <AuthProvider>
      <TaskProvider >
        <Navigation />
        <main>
          <Routes>
            <Route element={<RouteGuardIsNotAuthenticated />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<RouteGuardIsAuthenticated />}>
              <Route path="/" element={<Tasks />} />
              <Route path="/*" element={<Tasks />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/profile/edit" element={<EditUser />} />
            </Route>
          </Routes>
        </main>
      </TaskProvider>
    </AuthProvider >
  );
}

export default App;
