import "./App.css";
import SignInPage from "./routes/SignInPage/SignInPage";
import SignUpPage from "./routes/SignUpPage/SignUpPage";
import UrlsPage from "./routes/UrlsPage/UrlsPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <SignInPage />
    </div>
  );
}

export default App;
