// src/UsersList.js
import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "./firebase";

function UsersList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersCollection = collection(db, "users");

        const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
            const usersList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(usersList);
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return (
        <div>
            <h2>Users List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersList;
