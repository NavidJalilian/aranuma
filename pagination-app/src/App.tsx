import UserStatusProvider from "./contexts/UserStatusContext";
import PaginationPage from "./pages/PaginationPage";

function App() {
  return (
    <div className="App">
      <UserStatusProvider>
        <PaginationPage />
      </UserStatusProvider>
    </div>
  );
}

export default App;
