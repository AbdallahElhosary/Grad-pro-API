import React from "react"
import {  Home, Settings, User, Shield, TvMinimalPlay, Users, LogOut, MessageSquare } from "lucide-react"
import { Newspaper } from 'lucide-react';
export default function Sidebar() {

    const NavItem = ({ href, icon: Icon, label }) => (
        <div className="group relative">
            <a
                href={href}
                className="flex h-12 w-12 items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-900"
            >
                <Icon className="h-6 w-6" />
                <span className="sr-only">{label}</span>
            </a>
            <div className="absolute left-full ml-2 hidden rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover:block">
                {label}
            </div>
        </div>
    )

    return (
            <aside className="flex w-16 flex-col items-center border-r bg-white py-4 dark:bg-slate-800 dark:border-slate-700">
                <div className="flex flex-col items-center gap-4">
                    <NavItem href="/" icon={Home} label="Home Page" />
                    <NavItem href="/studentActivity" icon={Users} label="Student Activity " />
                    <NavItem href="/matrial" icon={TvMinimalPlay} label="Matrail" />
                    <NavItem href="/requirements" icon={Newspaper} label="Reqirements" />
                <NavItem href="/military" icon={Shield} label="Military" />
                <NavItem href="/sendMessages" icon={MessageSquare} label="Send Messages" />
                <NavItem href="/military" icon={LogOut} label="Log out" />

                </div>
                <div className="mt-auto flex flex-col gap-4">
                    <NavItem href="/profile" icon={User} label="Profile" />
                    <NavItem href="/settings" icon={Settings} label="Settings" />
                </div>
            </aside>

            
    )
}

