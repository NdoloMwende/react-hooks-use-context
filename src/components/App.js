import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";
import UserProvider from "../context/user";
import ThemeProvider, {ThemeContext } from "../context/theme";

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={theme}>
      <Header />
      <Profile />
    </main>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <AppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
