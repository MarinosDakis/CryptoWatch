import React from 'react'
import HelpIcon from '@mui/icons-material/Help';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

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
]