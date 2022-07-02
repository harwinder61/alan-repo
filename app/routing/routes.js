
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import WelcomeAuth from '../screens/Auth/WelcomeAuth';
import Home from '../screens/Home';
import OnBoarding from '../screens/OnBoarding';
import {appColors} from '../utils/appColors';

export const RoutesList = [
  {
    name: 'OnBoarding',
    component: OnBoarding,
    options: {
        },
  },


  {
    name: 'WelcomeAuth',
    component: WelcomeAuth,
    options: {
       },
  },
  {
    name: 'Login',
    component: Login,
    options: {
       },
  },
  {
    name: 'Signup',
    component: Signup,
    options: {
       },
  },
  {
    name: 'Home',
    component: Home,
    options: {
      },
  },
];