import React from 'react'
import {Text, Button, View, TouchableOpacity} from 'react-native'
import {createSwitchNavigator,createAppContainer} from 'react-navigation'
import Login from '../Accounts/login'
import Register from '../Accounts/register'
import Clients from '../clients/clients'
import Services from '../services/services'
import Home from '../home.js'
import Installation from '../services/installation'
import AboutUs from '../aboutUs'
import Charges from '../services/Charges'
import InternetOnly from '../services/internetOnly'
import TvPackages from '../services/tvPackages'
import ZukuOffice from '../services/zukuOffice'
import TriplePlay from '../services/triplePlay'
import ResetPassword from '../Accounts/resetPassword'
import Help from '../help'

const AppNavigator = createSwitchNavigator(
    {
        Login:Login,
        Register: Register,
        Home: Home,
        Charges:Charges,
        Services: Services,
        Installation : Installation,
        Clients:Clients,
        AboutUs:AboutUs,
        InternetOnly:InternetOnly,
        ZukuOffice:ZukuOffice,
        TriplePlay:TriplePlay,
        TvPackages:TvPackages,
        ResetPassword:ResetPassword,
        Help:Help
    }
)

const App = createAppContainer(AppNavigator);

export default App