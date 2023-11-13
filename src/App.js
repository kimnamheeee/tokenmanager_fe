import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./routes/SignInPage/SignInPage";
import SignUpPage from "./routes/SignUpPage/SignUpPage";
import UrlsPage from "./routes/UrlsPage/UrlsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/projects" element={<UrlsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
