import Header from './header/header';
import Main from "./body/main";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";
import app from './css/app.module.css';

function App() {
  return (
    <div className={app.App}>
      <Header/>
      <Main/>
      <Sidebar/>
      <Footer/>
    </div>
  );
};

export default App;
