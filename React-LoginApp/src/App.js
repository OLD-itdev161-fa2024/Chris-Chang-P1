import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import { Login } from "./Login.jsx"
import { Register } from './Register';

// class App extends React.Component {
//   state = {
//     data: null
//   }

//   componentDidMount() {
//     axios.get('http://localhost:5000')
//     .then((response) => {
//       this.setState({
//         data: response.data
//       })
//     })
//     .catch((error) => {
//       console.error(`Error fetching data: ${error}`);
//     })
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           GoodThings
//         </header>
//         {this.state.data}
//       </div>
//     );
//   }
// }

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
