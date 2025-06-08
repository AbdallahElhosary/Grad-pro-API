import React, { useEffect } from "react";
import AuthPage from "./components/AuthPage";
import {  Routes, Route } from "react-router";
import HomePage from "./components/Home";
import PaymentPage from "./pages/Payment";
import AddCourseForm from "./pages/Addcourse.jsx";
import MilitaryEducationPage from "./pages/Militery.jsx";
import CourseManagementPage from "./pages/Coursemanagement.jsx";
import AdminManagementPage from "./pages/Adminmanagement.jsx";
import EnterCodePage from "./pages/EnterCode.jsx";
import ForgotPasswordPage from "./pages/ForgetPassword.jsx";
import RequirementsPage from "./pages/ReqirementsPage.jsx";
import EnrollSubjects from "./pages/EnrollSubjects.jsx";
import ResetPasswordPage from "./pages/ResetPassword.jsx";
import MatrialPage from "./pages/Matrial.jsx";
import SettingsPage from "./pages/Settings.jsx";
import StudentActivitiesPage from "./pages/StudentActivity.jsx";
import AddCourseMaterial from "./pages/AddMatrial.jsx";
import LoadingPage from "./pages/Loading.jsx";
import StudentProfile from "./pages/StudentProfile.jsx";
import Sidebar from "./components/Sidebar.jsx";
import HeaderTitle from "./components/HeaderTitle.jsx";
import DeleteMaterial from "./pages/DeleteMatrial.jsx";
import { useSelector } from 'react-redux';






export default function App() {
  const darkMode = useSelector(state => state.settings?.darkMode) || false;

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="App font-sans flex min-h-screen bg-slate-50 dark:bg-slate-900">
      
      <Sidebar />
      <div className="flex-1">
        <div className="flex min-h-screen bg-gray-100  dark:bg-slate-900">
          <main className="flex-1">
            <HeaderTitle />
          
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/addcourse" element={<AddCourseForm />} />
              <Route path="/military" element={<MilitaryEducationPage />} />
              <Route path="/courseManagement" element={<CourseManagementPage />} />
              <Route path="/adminManagement" element={<AdminManagementPage />} />
              <Route path="/enterCode" element={<EnterCodePage />} />
              <Route path="/requirements" element={<RequirementsPage />} />
              <Route path="/enrollSubjects" element={<EnrollSubjects />} />
              <Route path="/matrial" element={<MatrialPage />} />
              <Route path="/matrial/add" element={<AddCourseMaterial />} />
              <Route path="/matrial/delete" element={<DeleteMaterial />} />

              <Route path="/loading" element={<LoadingPage />} />
              <Route path="/profile" element={<StudentProfile />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/studentActivity" element={<StudentActivitiesPage />} />
              <Route path="/auth/forgetPassword" element={<ForgotPasswordPage />} />
              <Route path="/auth/resetPassword" element={<ResetPasswordPage />} />
            </Routes>
            
          </main>
        </div>

      </div>
    </div>
  );
}