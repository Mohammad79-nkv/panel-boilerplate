import React,{useEffect} from 'react';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './../components/layout/index';
import { Route, Routes ,  useLocation} from "react-router-dom";
import {APP_ROUTES} from './../enum/app-route.enum'
import Dashboard from './Dashboard/dashboard';

// useLocation
// const Dashboard = React.lazy(() => import("./Dashboard/dashboard"));
const Login = React.lazy(() => import("./Auth/login"));
const TestPage = React.lazy(() => import("./TestPage/testPage"));
const NotfoundPage = React.lazy(() => import('./NotFounPage/notfoundPage'));

function Router() {
  const location = useLocation();
  useEffect(() => {
    console.log('location', location)
  }, [location])
  

  return (
    <>
      <AnimatePresence initial={true} mode={"wait"}>
      {/* location={location} key={location.pathname} */} 
        <Routes >
          <Route path={'*'} element={<NotfoundPage/>}/>
          <Route element={<MainLayout />}>
            <Route
              path={APP_ROUTES.ROOT}
              element={<Dashboard />}
            />
            <Route
              path={APP_ROUTES.LOGIN}
              element={<Login />}
            />
            <Route
              path={APP_ROUTES.TEST}
              element={<TestPage />}
            />
          </Route>
        </Routes>
      </AnimatePresence>


    </>
  )
}
export default Router