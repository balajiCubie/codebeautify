// ** Icon imports
import HomeOutline from 'mdi-material-ui/HomeOutline'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CalculatorIcon from 'mdi-material-ui/Calculator'
import FunctionsIcon from 'mdi-material-ui/Function'
import HospitalIcon from 'mdi-material-ui/Hospital'
import CurrencyInrIcon from 'mdi-material-ui/CurrencyInr'
import MoreIcon from 'mdi-material-ui/MathCompass'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
      title: 'Finance Calculators',
      icon: CurrencyInrIcon,
      path: '/finance-calculators'
    },
    {
      title: 'Health Calculators',
      icon: HospitalIcon,
      path: '/health-calculators'
    },
    {
      title: 'Math Calculators',
      icon: FunctionsIcon,
      path: '/math-calculators'
    },
    {
      title: 'Others Calculators',
      icon: MoreIcon,
      path: '/others-calculators'
    },
  ]
}

export default navigation
