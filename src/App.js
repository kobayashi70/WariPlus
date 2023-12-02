// App.js
// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";


// import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
// import Modal from "react-modal";
import "./App.css";

const App = () => {
  // const [user, setUser] = useState(null);

  // const [showCreateAccountModal, setShowCreateAccountModal] = useState(false);
  // const [showLoginModal, setShowLoginModal] = useState(false);

  // const handleCreateAccount = () => {
  //   //アカウント作成の処理
  //   setShowCreateAccountModal(true);
  // };

  // const handleLogin = () => {
  //   //ログインの処理
  //   setShowLoginModal(true);
  // };

  // const closeModal = () => {
  //   setShowCreateAccountModal(false);
  //   setShowLoginModal(false);
  // };

  return (
    <Router>
      <div>
        <header id="header">
          <h1>WariPlus</h1>
          <div className="header-item">
            {/* <button onClick={handleCreateAccount}>アカウント作成</button>
            <button onClick={handleLogin}>ログイン</button> */}
          </div>
        </header>
        <Dashboard />

        {/* <Routes>
          <Route path="/dashboard" element={<Dashboard user={user} />} />
          <Route path="/"></Route>
        </Routes> */}

        {/* <Modal isOpen={showCreateAccountModal} onRequestClose={closeModal} style={App}
        >
          <h2>アカウント作成</h2>
       
        </Modal>

        <Modal isOpen={showLoginModal} onRequestClose={closeModal}>
          <SignIn setUser={setUser} />
        </Modal> */}
      </div>
    </Router>
  );
};

export default App;
