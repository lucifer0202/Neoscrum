import './App.css';
import Signup from './pages/signup';
import Login from './pages/login';
import Feedback from './containers/feedback';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import FeedBackProvider from './context/feedbackProvider';
import FeedbackList from './containers/dashboard/feedbackList'
import Profile from './containers/profile'



function App() {
  return (
    <FeedBackProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/dashboard" component={FeedbackList} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </BrowserRouter>

    </FeedBackProvider>
  );
}
export default App