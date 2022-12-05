import "./App.css";
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs.jsx";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar sidebar={props.state.sidebar} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile/*" element={<Profile store={props.store} />} />
          <Route
            path="/dialogs/*"
            element={
              <Dialogs
                store={props.store}
                dialogsPage={props.state.dialogsPage}
                dispatch={props.dispatch}
              />
            }
          />
          <Route path="/news/*" element={<News />} />
          <Route path="/music/*" element={<Music />} />
          <Route path="/settings/*" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
