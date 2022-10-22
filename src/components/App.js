import logo from '../images/logo-header.svg';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header 
      logo = {logo}
      />
      <Main onEditProfile onAddPlace onEditAvatar/>
      <Footer/>
    </div>
  );
}

export default App;
