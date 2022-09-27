import UserStatusProvider from "./contexts/UserStatusContext";
import UsersPage from "./pages/PaginationPage";
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
