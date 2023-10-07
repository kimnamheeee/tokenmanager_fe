import "./App.css";
import SignInPage from "./routes/SignInPage/SignInPage";
import UrlsPage from "./routes/UrlsPage/UrlsPage";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <UrlsPage />
    </div>
  );
}

export default App;
