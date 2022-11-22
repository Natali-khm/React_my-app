import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="logo.png" />
      </header>
      <nav className="nav">
        <ul className="nav-list">
          <li>
            <a href="#">Profile</a>{" "}
          </li>
          <li>
            <a href="#">Messages</a>
          </li>
          <li>
            <a href="#">News</a>
          </li>
          <li>
            <a href="#">Music</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
      <div className="content">
        <img
          className="background-image"
          src="https://m-dekor.by/catalog/3078/main.webp"
        />
        <div className="user-page">
          <img className="avatar" src="40060.svg" />
          <div className="personal-data">
            <h2>Natka</h2>
            <ul className="personal-data-list">
              <li>Date of birth: 1 November</li>
              <li>City: Minsk</li>
              <li>Education: BGEU</li>
              <li>Web Site: https://github.com/Natali-khm</li>
            </ul>
          </div>
        </div>
        <div>my posts</div>
        <div>new post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  );
}

export default App;
