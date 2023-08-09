import {
  CasinoIcon,
  DepositIcon,
  GameGuideIcon,
  HomeIcon,
  MoreIcon,
  SlotIcon,
  UserIcon,
  WithdrawIcon,
} from "/public/svg/icons";

export const menu = [
  {
    url: "",
    icon: <HomeIcon />,
    key: "home",
    name: "Home Page",
    router: "/",
  },
  {
    url: "",
    icon: <CasinoIcon />,
    key: "casino",
    name: "Casino",
    router: "/casino",
  },
  {
    url: "",
    icon: <SlotIcon />,
    key: "slot",
    name: "Slot",
    router: "/slot",
  },
  {
    url: "",
    icon: <GameGuideIcon />,
    key: "gameGuide",
    name: "Game Guide",
    router: "/todos",
  },
  {
    url: "/images/logo.png",
    key: "",
    name: "",
    router: "/",
  },
  {
    url: "",
    icon: <DepositIcon />,
    key: "deposit",
    name: "Deposit",
    router: "",
  },
  {
    url: "",
    icon: <WithdrawIcon />,
    key: "withdraw",
    name: "Withdraw",
    router: "",
  },
  {
    url: "",
    icon: <UserIcon />,
    key: "user",
    name: "User Info",
    router: "/profile",
  },
  {
    url: "",
    icon: <MoreIcon />,
    key: "notice",
    name: "Notice",
    router: "",
  },
];

export const menuMore = [
  {
    url: "",
    key: "depositHistory",
    name: "Deposit History",
  },
  {
    url: "",
    key: "withdrawHistory",
    name: "Withdraw History",
  },
  {
    url: "",
    key: "event",
    name: "Event",
  },
  {
    url: "",
    key: "message",
    name: "Message",
  },
  {
    url: "",
    key: "helpCenter",
    name: "Help Center",
  },
  {
    url: "",
    key: "notice",
    name: "Notice",
  },
];
