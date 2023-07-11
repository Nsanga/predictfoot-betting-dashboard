import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdHome,
  MdLock,
  MdOutlineShoppingCart,
  MdSettings,
  MdNotifications,
} from "react-icons/md";
import { IoFootballSharp } from "react-icons/io5";
import { PiScreencastFill } from "react-icons/pi";

// Admin Imports
import MainDashboard from "views/admin/default";
import Pronostics from "views/admin/pronostics"
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";
import DataTables from "views/admin/dataTables";
import RTL from "views/admin/rtl";
import Users from "views/admin/users";
import Notifications from "views/admin/notifications";
import Settings from "views/admin/settings";
import Accueil from "views/admin/landingPageAccueil";
import Blog from "views/admin/settings";


// Auth Imports
import SignInCentered from "views/auth/signIn";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "/default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: MainDashboard,
  },
  {
    name: "Pronostics",
    layout: "/admin",
    path: "/pronostics",
    icon: <Icon as={IoFootballSharp} width='20px' height='20px' color='inherit' />,
    component: Pronostics,
  },
  {
    name: "Users",
    layout: "/admin",
    path: "/users",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Users,
  },

  {
    name: "Notifications",
    layout: "/admin",
    path: "/notifications",
    icon: <Icon as={MdNotifications} width='20px' height='20px' color='inherit' />,
    component: Notifications,
  },

  {
    name: "Landing-page",
    layout: "/admin",
    path: "/landing-page",
    icon: <Icon as={PiScreencastFill} width='20px' height='20px' color='inherit' />,
    children: [
      {
        name: "Accueil",
        layout: "/admin",
        path: "/landing-page/accueil",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: Accueil,
      },
      {
        name: "Blog",
        layout: "/admin",
        path: "/landing-page/blog",
        icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
        component: Blog,
      },
    ]
  },

  {
    name: "Settings",
    layout: "/admin",
    path: "/settings",
    icon: <Icon as={MdSettings} width='20px' height='20px' color='inherit' />,
    component: Settings,
  },

  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "/nft-marketplace",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width='20px'
        height='20px'
        color='inherit'
      />
    ),
    component: NFTMarketplace,
    secondary: true,
  },
  {
    name: "Data Tables",
    layout: "/admin",
    icon: <Icon as={MdBarChart} width='20px' height='20px' color='inherit' />,
    path: "/data-tables",
    component: DataTables,
  },
  {
    name: "Profile",
    layout: "/admin",
    path: "/profile",
    icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "RTL Admin",
    layout: "/rtl",
    path: "/rtl-default",
    icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
    component: RTL,
  },
];

export default routes;
