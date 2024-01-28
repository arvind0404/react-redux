import logo from './logo.svg';
import './App.css';
import HomeContainer from "./containers/HomeContainer"
import HeaderContainer from "./containers/HeaderContainer"
function App() {
  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <HomeContainer></HomeContainer>
    </div>
  );
}

export default App;
