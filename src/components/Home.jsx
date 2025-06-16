'use client'

import { Link } from 'react-router-dom';
import {
    BookOpen, Users, Calendar, Award, Upload, UserPlus, BarChart3, FilePlus,
    Lock, ShieldCheck, FileText, MessageSquare, GraduationCap,
    FileBarChart, LogIn, LogOut, UserCog, User, ClipboardList
} from 'lucide-react';
import ProtectedRouteHook from '../hook/auth/protected-route-hook';

export default function DashboardNavigation() {
    const [, isUser, isAdmin] = ProtectedRouteHook();

    const userPages = [
        { name: 'Student Activities', icon: <Users />, path: '/studentActivity' },
        { name: 'Military Education', icon: <ShieldCheck />, path: '/military' },
        { name: 'Course Materials', icon: <BookOpen />, path: '/matrial' },
        { name: 'Results', icon: <BarChart3 />, path: '/results' },
        { name: 'Enroll Subjects', icon: <Award />, path: '/enrollSubjects' },
        { name: 'Profile', icon: <GraduationCap />, path: '/profile' },
        { name: 'Requirements', icon: <ClipboardList />, path: '/requirements' },
        { name: 'Payment', icon: <Lock />, path: '/payment' },
    ];

    const adminPages = [
        { name: 'Add Material', icon: <FilePlus />, path: '/matrial/add' },
        { name: 'Delete Material', icon: <FileText />, path: '/matrial/delete' },
        { name: 'All Material', icon: <FileText />, path: '/matrial' },
        { name: 'Course Management', icon: <ClipboardList />, path: '/courseManagement' },
        { name: 'Add Course', icon: <Calendar />, path: '/addcourse' },
        { name: 'Students', icon: <User />, path: '/students' },
        { name: 'Add Student', icon: <UserPlus />, path: '/addstudent' },
        { name: 'Add Document', icon: <FileText />, path: '/addDocument' },
        { name: 'Upload Results', icon: <Upload />, path: '/uploadResults' },
        { name: 'All Students Results', icon: <FileBarChart />, path: '/allResults' },
        { name: 'Admins', icon: <UserCog />, path: '/adminManagement' },
        { name: 'Send Messages', icon: <MessageSquare />, path: '/sendMessages' },
    ];

    const authPages = [
        { name: 'Login', icon: <LogIn />, path: '/login' },
        { name: 'Logout', icon: <LogOut />, path: '/logout' },
    ];

    const navItems = isUser
        ? [{ title: 'User Pages', items: userPages }]
        : isAdmin
            ? [{ title: 'Admin Pages', items: adminPages }]
            : [{ title: 'Auth Pages', items: authPages }];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">Dashboard</h1>
                {navItems.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="mb-10">
                        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            {section.items.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="bg-white shadow-md hover:shadow-lg border no-underline border-gray-200 rounded-xl px-6 py-6 flex flex-col items-center justify-center transition duration-300 text-center hover:bg-blue-50"
                                >
                                    <div className="text-blue-600 mb-3">{item.icon}</div>
                                    <span className="text-lg font-semibold text-gray-800 no-underline">{item.name}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
