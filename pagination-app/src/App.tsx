import React from "react";
import UserStatusProvider from "./contexts/UserStatusContext";
import UsersPage from "./pages/UsersPage";
function App() {
  return (
    <div className="App">
      <UserStatusProvider>
        <UsersPage />
      </UserStatusProvider>
    </div>
  );
}

export default App;
