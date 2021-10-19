import React from 'react'
import HelpIcon from '@mui/icons-material/Help';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import VpnKeyIcon from '@mui/icons-material/VpnKey';

export const SidebarData = [
    {
      title: "Prices",
      path: "/prices",
      icon: <MonetizationOnIcon />,
    },
    {
      title: "Information",
      path: "/info",
      icon: <HelpIcon />,  
    },
    {
      title: "Crypto Exchanges",
      path: "/exchanges",
      icon: <VpnKeyIcon />,  
    },
]