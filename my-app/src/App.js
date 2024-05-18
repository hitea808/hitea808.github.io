import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import BannerComponent from './components/BannerComponent';
import MenuComponent from './components/MenuComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <div id="app">
        <NavbarComponent />
        <BannerComponent />
        <MenuComponent />
      </div>
    </>
  );
}

export default App;
