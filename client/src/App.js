import React, { Component } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import FrontPage from "./pages/frontPage/frontPage.js";
//our LogIn is Thomas's LoginForm...
import Signup from './components/sign-up';
import LoginForm from './components/login-form';
import Suggest from './pages/suggest/suggest'
import AddWine from './pages/addWine/addWine'

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null,
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios
      .get('/api/user/')
      .then((response) => {
        console.log('Get user response: ');
        console.log(response.data.user);
        if (response.data.user) {
          console.log(
            'Get User: There is a user saved in the server session: '
          );

          this.setState({
            loggedIn: true,
            username: response.data.user.username,
          });
        } else {
          console.log('Get user: no user');
          this.setState({
            loggedIn: false,
            username: null,
          });
        }
      })
      .catch((err) => console.log('err', err));
  }

  render() {
    return (
      <div className='App'>
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Join the party {this.state.username}</p>}
        {/* Routes to different components */}
        
        <Route path="/" component={FrontPage} exact />
        <Route
          path='/login'
          render={() => <LoginForm updateUser={this.updateUser} />}
        />
        <Route path='/signup' render={() => <Signup />} />
        <Route path="/suggest" component={Suggest} />
        <Route path="/addWine" component={AddWine} />
      </div>
    );
  }
}

export default App;
