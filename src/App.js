import React, { useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import { Routes, Route } from "react-router";
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
import SendMessages from "./pages/SendMessages.jsx";
import StudentsPage from "./pages/Students.jsx";
import StudentResults from "./pages/StudentResults.jsx";
import ProtectedRouteHook from "./hook/auth/protected-route-hook.js";
import ProtectedRoute from "./components/utils/ProtectedRoute.jsx";
import AddStudent from "./pages/AddStudent.jsx";
import AddDocument from "./pages/AddDocument.jsx";






export default function App() {
  const [userData, isUser, isAdmin] = ProtectedRouteHook();

  console.log(userData)

  return (
    <div className="App font-sans flex min-h-screen bg-slate-50 dark:bg-slate-900">
      


      <Sidebar />
      <div className="flex-1">
        <div className="flex min-h-screen bg-gray-100  dark:bg-slate-900">
          <main className="flex-1">
            <HeaderTitle name={userData?.name} />
            <Routes>

              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/military" element={<MilitaryEducationPage />} />
              <Route path="/adminManagement" element={<AdminManagementPage />} />
              <Route path="/enterCode" element={<EnterCodePage />} />
              <Route path="/requirements" element={<RequirementsPage />} />
              <Route path="/matrial" element={<MatrialPage />} />

              

              {/* Protected */}



              <Route element={<ProtectedRoute auth={isAdmin || isUser} />}>

                <Route path="/" element={<HomePage />} />
                <Route path="/enrollSubjects" element={<EnrollSubjects />} />
                <Route path="/studentActivity" element={<StudentActivitiesPage />} />

              </Route>


              <Route element={<ProtectedRoute auth={isAdmin} />}>
                <Route path="/courseManagement" element={<CourseManagementPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/matrial/add" element={<AddCourseMaterial />} />
                <Route path="/addcourse" element={<AddCourseForm />} />
                <Route path="/matrial/delete" element={<DeleteMaterial />} />
                <Route path="/sendMessages" element={<SendMessages />} />
                <Route path="/students" element={<StudentsPage />} />
                <Route path="/addstudent" element={<AddStudent />} />
                <Route path="/addDocument" element={<AddDocument />} />


              </Route>


              <Route element={<ProtectedRoute auth={isUser} />}>
                <Route path="/profile" element={<StudentProfile />} />
                <Route path="/studentProfile" element={<StudentProfile />} />
                <Route path="/results" element={<StudentResults />} />

              </Route>

              {/* PROTECTED */}

                <Route element={<ProtectedRoute auth={!isAdmin && !isUser} />}>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/auth/forgetPassword" element={<ForgotPasswordPage />} />
                  <Route path="/auth/resetPassword" element={<ResetPasswordPage />} />
                  {/* <Route path="/studentActivity" element={<StudentActivitiesPage />} /> */}
                </Route>

              <Route path="/loading" element={<LoadingPage />} />
              

            </Routes>

          </main>
        </div>

      </div>
    </div>
  );
}