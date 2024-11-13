

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



/*
import React from "react";
import Task from './Task';

function App() {
return (
  <div>
    <h1>To-Do List</h1>
    <Task text="Buy grocieres" completed={false}/>
    <Task text="go for run" completed={true}/>
    <Task text="Read a Book" completed={true}/>
  </div>
);
}
export default App;
*/
/*
import React from "react";
import ProfilePage from "./ProfilePage";
function App(){
  return(
    <div>
      <ProfilePage />
    </div>
  );
}
export default App;
*/

/*
import React, { Component } from 'react';
class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count:0
    };
  }

  increment=() =>{
    this.setState({count: this.state.count +1});
  }
  decrement=()=>{
    this.setState({count : this.state.count -1});
  }
  render(){
    return(
      <div>
        <h1> Counter: {this.state.count}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
export default Counter;
*/

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import Layout from "./components/Layout";
// import Contact from "./components/Contact";
// import Blogs from "./components/Blogs";

// export default function App() {
//   return (
    
      
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />} >
//             <Route index element={<Home />}/>
//             <Route path="/Contact" element={<Contact/>} />
//             <Route path="/Blogs" element={<Blogs/>} />
            
//           </Route>
//         </Routes>
//       </BrowserRouter>
    
//   );
// }
// //const root= ReactDOM.createRoot(document.getElementById('root'));


// import React from 'react';
// import LoginForm from './LoginForm';

// const App = () => {
//     return (
//         <div>
//             <h1>Welcome to the Login Page</h1>
//             <LoginForm />
//         </div>
//     );
// };

// export default App;
