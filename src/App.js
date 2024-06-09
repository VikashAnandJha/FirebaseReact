// src/App.js
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";
import UsersList from "./UsersList";
import Login from "./Login";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleAddData = async () => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        age: age
      });
      console.log("Document written with ID: ", docRef.id);
      // Clear the input fields after successful submission
      setName("");
      setAge("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="App">
      <h1>Add User</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button onClick={handleAddData}>Add Data</button>

      <UsersList />
      <Login />
    </div>
  );
}

export default App;
