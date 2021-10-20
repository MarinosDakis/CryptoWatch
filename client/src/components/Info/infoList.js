import LockIcon from '@mui/icons-material/Lock';
import SchoolIcon from '@mui/icons-material/School';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ViewCarouselIcon from '@mui/icons-material/ViewCarousel';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotListedLocationIcon from '@mui/icons-material/NotListedLocation';
import MoodIcon from '@mui/icons-material/Mood';

/*
    Sources for information:
    https://www.fool.com/the-ascent/buying-stocks/articles/11-things-to-look-for-in-a-cryptocurrency-exchange/
    https://www.nasdaq.com/articles/6-things-to-consider-when-choosing-a-cryptocurrency-exchange-2018-02-21
    https://www.forbes.com/advisor/investing/best-crypto-exchanges/
    https://madappgang.com/blog/cryptocurrency-exchange-platform-development/
    */

export const infoList = [
    {
      consider: "Cryptocurrency Selection",
      desc: "The number of cryptocurrencies available on a platform is something traders should consider when looking to buy and sell cryptocurrencies. Experienced traders might be more inclined to use platforms with more available cryptocurrencies, whereas newcomers might feel more comfortable choosing platforms with popular currencies to avoid confusion.",
      icon: <ViewCarouselIcon />,
    },
    {
      consider: "Security",
      desc: "The security of a platform is one of the greatest factors traders should consider before buying and selling cryptocurrencies. The platform a trader decides to use should implement security measures such as cold storages (offline storages), two-factor authentication, user validation, and encryption to defend against cyber-attacks.",
      icon: <LockIcon />,
    },
    {
      consider: "Fees",
      desc: "Some cryptocurrency exchanges include a trading fee and additional commission costs. In addition, buyers and sellers can also find themselves paying a fee for deposits and withdrawals. Traders should research exchanges beforehand to see what fees they’re willing to pay.",
      icon: <MonetizationOnIcon />,
    },
    {
      consider: "User Experience",
      desc: "The user experience is a great factor to consider when deciding which exchange to use. Some exchanges have a better user experience than others so it’s best to see what works for you. Some questions you might as yourself: is it easy to navigate through the website? How is its interface designed? How is the customer support? Do they have good reviews? Do they have a mobile app? Ultimately, each trader has their own preference in what they’re willing to work with, so it’s best to research possible exchanges to use.",
      icon: <MoodIcon />,
    },
    {
      consider: "Educational Elements",
      desc: "Some exchanges offer educational resources that explain the fundamentals of cryptocurrency trading. Experienced traders might not find the resources too useful, but newcomers might appreciate the material more. If you’re just getting into cryptocurrencies, it’s recommended to start off with an educational platform.",
      icon: <SchoolIcon />,
    },
    {
      consider: "Platform Features",
      desc: "The features of one exchange to another could be the selling point to which exchange a trader uses. For instance, the basic features of an exchange include user authorization and verification, the user interface, how its trade engine functions, the types of wallets provided, transaction history and order book, analytical tools, and push notifications. If one exchange is able to maintain a leading position in keeping these features efficient, then they’re most likely to stay ahead in the game.",
      icon: <LightbulbIcon />,
    },
    {
      consider: "Availability",
      desc: "The availability of an exchange is also crucial for traders. Some exchanges are not made readily available in some states and countries, so it’s best to see if you’re able to use an exchange. The availability of exchanges is subject to change depending on companies and laws.",
      icon: <NotListedLocationIcon />,
    },
  ]