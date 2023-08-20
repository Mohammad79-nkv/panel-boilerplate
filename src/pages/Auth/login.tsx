// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { login } from "redux/slices/auth";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { APP_ROUTES } from "constants/enum/app-route.enum";
// import { useEffect } from "react";
// import { LoginService } from "services/login.service";
// import { getPermissionsFromToken } from "tools/pure-function/jwtDecoder";
// // import { Backdrop, CircularProgress } from "@mui/material";
// import { RootState } from "redux/store";
// import { IAuth } from "model/redux/auth";
// import { LoadingOutlined } from '@ant-design/icons';
// import { Spin } from 'antd';

// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


// const loginreq = new LoginService(import.meta.env.VITE_APP_AUTH_URL);

// const Login = () => {
//   const auth = useAppSelector((store: RootState): IAuth => store.auth);
//   const { isLogin, isLogout, token, pkce } = auth;
//   const [searchParams, setSearchParams] = useSearchParams();
//   const dispatch = useAppDispatch();
//   const navigate = useNavigate();
//   const code = searchParams.get("code");
//   useEffect(() => {
//     (async () => {
//       if (!code && !isLogin && !isLogout) {
//         window.location.replace(
//           `${import.meta.env.VITE_APP_AUTH_URL}/realms/smartbss/protocol/openid-connect/auth?response_type=code&client_id=web&scope=openid&redirect_uri=${import.meta.env.VITE_APP_FALLBACK_URL}&code_challenge=${pkce?.code_challenge}&code_challenge_method=S256`
//         );
//       }
      // import.meta.env.VITE_APP_AUTH_URL

//       if (code && !isLogin) {
//         const payload = {
//           grant_type: "authorization_code",
//           code: code ? code : "",
          // redirect_uri: `${import.meta.env.VITE_APP_FALLBACK_URL}`,
//           code_verifier: pkce?.code_verifier,
//         };
//         const res = await loginreq.login(payload);
//         dispatch(
//           login({
//             permissions: getPermissionsFromToken(res.data.access_token),
//             token: res.data,
//           })
//         );
//         searchParams.delete("code");
//         searchParams.delete("session_state");
//         setSearchParams(searchParams);
//       }
//     })();
//   }, []);
//   useEffect(() => {
//     if (token?.access_token && isLogin) {
//       navigate(APP_ROUTES.ROOT);
//     }
//   }, [token?.access_token]);

//   return (
//     <div className="h-screen w-full relative">
//       {/* <CircularProgress className="absolute top-auto left-auto z-10 text-white" /> */}
//       <Spin indicator={antIcon} className="absolute top-auto left-auto z-10 text-white" />
//     </div>
//   );
// };
// export default Login;

function Login() {
    return (
      <div>Login</div>
    )
  }
  export default Login