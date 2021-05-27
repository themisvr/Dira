import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Plan from './components/Plans'
import { BrowserRouter as Router, Redirect, Route, Switch, useHistory} from 'react-router-dom';
import ProjectMain from './components/ProjectMain'
import PasswordRecovery from './components/PasswordRecovery';
import ActiveSprint from './components/ActiveSprint';
import Members from './components/Members';
import Backlog from './components/Backlog';
import { useState } from 'react';
import { DiraProjectClient, DiraUserClient } from "dira-clients";

function App() {
  const history = useHistory();
  const [token, setToken] = useState(localStorage.jwtoken);
  const [userInfo, setUserInfo] = useState({
    username: null,
    email: null,
  });
  const userClient = new DiraUserClient();
  const projectClient = new DiraProjectClient();

  const do_login = true;
  if(!do_login) {
    // return (
    //   <Router>
    //     <div className="App">
    //         <Switch>
    //           <Route exact path="/">
    //             { token !== undefined && <Redirect to="/proj_main" /> }
    //             { token === undefined && <Home/> }
    //           </Route>
    //           <Route path="/sign_in">
    //             { token !== undefined && <Redirect to="/proj_main" /> }
    //             { token === undefined && <Login setToken={setToken} client={userClient} /> }
    //           </Route>
    //           <Route path="/register">
    //             { token !== undefined && <Redirect to="/proj_main" /> }
    //             { token === undefined && <Register client={userClient} /> }
    //           </Route>
    //           <Route path="/recover">
    //             { token !== undefined && <Redirect to="/proj_main" /> }
    //             { token === undefined && <PasswordRecovery/> }
    //           </Route>

    //           <Route path="/pricing">
    //             <Plan/>
    //           </Route>

    //           <Route path="/proj_main">
    //             { token === undefined && <Redirect to="/sign_in" /> }
    //             { token !== undefined && <ProjectMain/> }
    //           </Route>
    //           <Route path="/backlog">
    //             {/* { token === undefined && <Redirect to="/sign_in" /> }
    //             { token !== undefined && <Backlog/> } */}
    //             <Backlog/>
    //           </Route>
    //           <Route path="/members">
    //             { token === undefined && <Redirect to="/sign_in" /> }
    //             { token !== undefined && <Members/> }
    //           </Route>
    //           <Route path="/active_sprint">
    //             {/* { token === undefined && <Redirect to="/sign_in" /> }
    //             { token !== undefined && <ActiveSprint/> } */}
    //             <ActiveSprint/>
    //           </Route>
    //         </Switch>
    //     </div>
    //   </Router>
    // );
  } else {
    return (
      <Router>
        <div className="App">
            <Switch>
              <Route exact path="/">
                { token !== undefined && <Redirect to="/proj_main" /> }
                { token === undefined && <Home/> }
              </Route>
              <Route path="/sign_in">
                { token !== undefined && <Redirect to="/proj_main" /> }
                { token === undefined && <Login setToken={setToken} 
                                                client={userClient} 
                                                setUserInfo={setUserInfo} 
                                         /> }
              </Route>
              <Route path="/register">
                { token !== undefined && <Redirect to="/proj_main" /> }
                { token === undefined && <Register client={userClient} /> }
              </Route>
              <Route path="/recover">
                { token !== undefined && <Redirect to="/proj_main" /> }
                { token === undefined && <PasswordRecovery/> }
              </Route>

              <Route path="/pricing">
                <Plan/>
              </Route>

              <Route path="/proj_main">
                { token === undefined && <Redirect to="/sign_in" /> }
                { token !== undefined && <ProjectMain 
                                           username={userInfo.username} 
                                           projectClient={projectClient}
                                           token={token}
                                         /> }
              </Route>
              <Route path="/backlog">
                { token === undefined && <Redirect to="/sign_in" /> }
                { token !== undefined && <Backlog username={userInfo.username}/> }
              </Route>
              <Route path="/members">
                { token === undefined && <Redirect to="/sign_in" /> }
                { token !== undefined && <Members username={userInfo.username}/> }
              </Route>
              <Route path="/active_sprint">
                { token === undefined && <Redirect to="/sign_in" /> }
                { token !== undefined && <ActiveSprint username={userInfo.username}/> }
              </Route>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;