import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from "../components/Login.vue";
import BackgroundLogin from "../components/BackgroundLogin.vue";
import FrontDesk from "../components/frontdesk/FrontDesk.vue";
import PersonalCenter from "../components/personalcenter/PersonalCenter.vue";

import msg from "../components/Message_management.vue";
import talk from "../components/talk.vue";
import company from "../components/company.vue";
import per from "../components/person.vue";

import SignManager from "../components/SignManager";
import Message from "../components/Message";
import AddMessage from "../components/AddMessage";
import DataTotal from "../components/DataTotal";



Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: Home,
    children: [{
        path: "/msg",
        component: msg
      },
      {
        path: "/talk",
        component: talk
      },
      {
        path: "/company",
        component: company
      },
      {
        path: "/sign",
        name: "sign",
        component: SignManager
      },
      {
        path: "/message",
        name: "message",
        component: Message
      },
      {
        path: "/addMessage",
        name: "addMessage",
        component: AddMessage
      },
      {
        path: "/dataTotal",
        name: "dataTotal",
        component: DataTotal
      }
    ]
  },
  {
    path: "/index",
    component: FrontDesk
  },
  {
    path: "/personalcenter",
    component: PersonalCenter
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/endlogin",
    component: BackgroundLogin
  },
  {
    path: "/person",
    component: per
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router