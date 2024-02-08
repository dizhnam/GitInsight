// Navbar.js 
import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { ButtonLight } from './ButtonLight';
import { ButtonDark } from './ButtonDark';


export const LandingBar = () => {
    const navigate = useNavigate();
    const navLinks = [
        { href: "/", label: "Home" },
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact Us" },
    ];
    
    const handleSignIn = () =>{
        navigate('/signin')
    }

    const handleSignUp = () =>{
        navigate('/signup')
    }

    return (
        <>
        <header className="sm:px-8 px-4 py-2 z-10 w-full shadow-md">
            <nav className="flex justify-between items-center max-container">
            <a href="/" className="text-3xl font-bold font-poppins">
                GitInsight
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                <li key={item.label}>
                    <a
                    href={item.href}
                    className="font-poppins leading-normal text-lg text-slate-gray"
                    >
                    {item.label}
                    </a>
                </li>
                ))}
            </ul>
            <ButtonLight onClick={handleSignIn} label="Login" />
            <ButtonDark onClick={handleSignUp} label="Register" />
            </nav>
        </header>
        </>
    );
};