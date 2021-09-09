import Header from "./header/header";
import Main from "./body/main";
import Sidebar from "./sidebar/sidebar";
import Footer from "./footer/footer";
import appStyle from './css/app.module.scss';

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
