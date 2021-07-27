import './App.css';
import Signup from './pages/signup';
import Login from './pages/login';
import Dashboard from './containers/dashboard';
import Feedback from './containers/feedback';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import FeedBackProvider from './context/feedbackProvider';
import FeedbackList from './context/feedbackList';
import Header from './containers/header';



function App() {
  return (
    <FeedBackProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Signup} exact />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={FeedbackList} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </BrowserRouter>

    </FeedBackProvider>
  );
}
export default App