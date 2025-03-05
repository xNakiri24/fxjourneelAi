import './App.css';
import { useContext } from 'react';
import Authentication from "./Pages/Authentication"
import Dashboard from "./Pages/Dashboard"
import { AuthContext } from './context/AuthContext';

function App() {
  // const authContext = useContext(AuthContext); // Access the entire context value
  // const currentUser = authContext.currentUser; // Extract the currentUser property

  // console.log(currentUser); // Now currentUser is correctly defined

  return (
    <>
      {/* <Authentication /> */}
      <Dashboard />
    </>
  );
}

export default App;
