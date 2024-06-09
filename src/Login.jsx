// src/Login.js
import React, { useState, useEffect } from "react";
import { auth, provider } from "./firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

function Login() {
    const [user, setUser] = useState(null);

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
        } catch (error) {
            console.error("Error during sign-in: ", error);
        }
    };
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Error during sign-out: ", error);
        }
    };


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <div>
                <h2>Login</h2>
                {user ? (
                    <div>
                        <p>Welcome, {user.displayName}!</p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <button onClick={handleLogin}>Sign in with Google</button>
                )}
            </div>
        </div>
    );
}

export default Login;
