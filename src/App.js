import './App.css';

import { AppConfig, UserSession, showConnect } from '@stacks/connect';

const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });



function App() {


  function authenticate() {
    showConnect({
      appDetails: {
        name: 'Xverse',
        icon: window.location.origin + '/my-app-logo.svg',
      },
      onFinish: () => {
        let userData = userSession.loadUserData();
        // Save or otherwise utilize userData post-authentication
      },
      userSession: userSession,
    });
  }
  function onButtonClick() {
    console.log('button clicked');
    authenticate();
  } 

  return (
    <div className="App">
      <button style={{height: 30, width: 100, marginTop: 50}} onClick={onButtonClick}>Connect</button>
    </div>
  );
}

export default App;
