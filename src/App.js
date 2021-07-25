import './App.css';
import Registration from './pages/registration';
import Login from './pages/login';
import Dashboard from './containers/dashboard';
import Feedback from './containers/feedback';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";




function App() {
  return (
       <BrowserRouter>
        <Switch>
          <Route path="/" component={Registration} exact />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/feedback" component={Feedback} />

        </Switch>
      </BrowserRouter>
  );
}
export default App