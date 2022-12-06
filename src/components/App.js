import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from "./LandingPage";
import MainPage from "./MainPage";
import 'semantic-ui-css/semantic.min.css'

function App() {
  // const [organizations, setOrganizations] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:9292/bubleteas")
  //     .then((r) => r.json())
  //     .then((organizations) => console.log(organizations));
  // }, []);

  return (
    <>
      
        <Switch>
          <Route exact path = '/'>
            <LandingPage />
          </Route>
          <Route exact path = '/mainpage'>
            <MainPage  />
          </Route>
        </Switch>
    </>

  );
}

export default App;
