import './App.css';
import Navbar from './Navbar';
import Content from './Content';
import Login from './Login';

function App() {
  return (
    <div className="container-fluid p-1">
      <Navbar />
      
      <div className="row p-3 page-1">
        <Content />
        <Login />
      </div>
    </div>
  );
}

export default App;
