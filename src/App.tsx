// library 
import { ConfigProvider } from 'antd';
import fa_IR from 'antd/locale/fa_IR';
import en_US from 'antd/locale/en_US';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import pkceChallenge from "pkce-challenge";
// custom 
import Router from './pages/router';
import{configtheme} from './theme/index';
import { IPkce } from "./model/redux/pkce";
import {useAppDispatch , useAppSelector} from './redux/hooks'
import {RootState} from './redux/store'
import { Pkce } from "./model/redux/auth";
import { pkceState } from "./redux/slices/auth";
import {LangStatus} from './redux/slices/change-lang'

function App() {
  const dispatch = useAppDispatch();
  const pkce = useAppSelector((store: RootState): Pkce => store.auth.pkce);
  const {lang} = useAppSelector((state: RootState): LangStatus => state.lang)


  let pkceGenerator: IPkce = { code_challenge: "", code_verifier: "" };
  if (pkce?.code_challenge === "") {
    pkceGenerator = pkceChallenge();
    dispatch(
      pkceState({
        code_challenge: pkceGenerator.code_challenge,
        code_verifier: pkceGenerator.code_verifier,
      })
    );
  }

  return (
    <BrowserRouter>
      <ConfigProvider 
        theme={configtheme}
        componentSize={'middle'}
        locale={!lang ? fa_IR : en_US}
        direction={lang ? 'rtl' : 'ltr'}
      >
        <Router />
      </ConfigProvider>
      <ToastContainer
          position={ !lang ? "bottom-left" : "bottom-right" }
          rtl={ !lang ? false : true }
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
    </BrowserRouter>
  )
}

export default App
