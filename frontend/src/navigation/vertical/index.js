// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CalculatorIcon from 'mdi-material-ui/Calculator'
import FunctionsIcon from 'mdi-material-ui/Function'
import HospitalIcon from 'mdi-material-ui/Hospital'
import CurrencyInrIcon from 'mdi-material-ui/CurrencyInr'
import MoreIcon from 'mdi-material-ui/MathCompass'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const navigation = () => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/'
    },
    {
      sectionTitle: 'Apps'
    },
    {
      title: 'All Code Beautify',
      icon: FavoriteBorderIcon,
      path: '/allCodeBeautify'
    },
    {
      title: 'Popular Functionality',
      icon: ArrowCircleUpIcon,
      path: '/finance-calculators'
    },
    {
      title: 'New Functionality',
      icon: FiberNewIcon,
      path: '/health-calculators'
    },
    {
      title: 'Trending Tools',
      icon: TrendingUpIcon,
      path: '/math-calculators'
    },
    {
      title: 'Others Tools',
      icon: MoreIcon,
      path: '/others-calculators'
    },
  ]
}

export default navigation
