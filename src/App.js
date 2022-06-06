import "./App.css";
import Products from "./components/Products/Products";
import Navbar from './components/Navbar/Navbar.jsx';
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {
        // Code here
      }<Navbar />
      <h1>Login</h1>
      <Login />
      <Products />
    </div>
  );
}

export default App;
