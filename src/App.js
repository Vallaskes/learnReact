import Header from "./header/Header";
import Main from "./body/Main";
import Sidebar from "./sidebar/Sidebar";
import Footer from "./footer/Footer";
import appStyle from './css/App.module.scss';

function App() {
  return (
    <div className={appStyle.App}>
      <Header/>
      <Main/>
      <Sidebar/>
      <Footer/>
    </div>
  );
};

export default App;
