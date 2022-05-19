import './resetcss.css';
import './gird.css';
import './Global.css';
import Header from './page/header';
import HeaderMobile from './page/headerMobile';
import Main from './page/main';
import { Provider } from "react-redux";
import store from './redux/store';
import Modal from './compontens/modal';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HeaderMobile />
        <Main />
        <Modal />
      </div>
    </Provider>
  );
}

export default App;
