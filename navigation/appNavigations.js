import React from 'react'
import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Login from '../Accounts/login'
import Register from '../Accounts/register'
import Profile from '../clients/clients'
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
import Scratch from '../scratch/scratch'
import { ActivityIndicator } from 'react-native'
import InstallationsDetails from '../services/installationDetails'




const AppNavigator = createStackNavigator(
    {
        
        Login:Login,
        Home: Home,
        Scratch:Scratch,
        Charges:Charges,
        Services: Services,
        Installation : Installation,
        Profile:Profile,
        AboutUs:AboutUs,
        InternetOnly:InternetOnly,
        ZukuOffice:ZukuOffice,
        TriplePlay:TriplePlay,
        TvPackages:TvPackages,
        Register: Register,
        ResetPassword:ResetPassword,
        InstallationsDetails:InstallationsDetails,
        Help:Help,
    }
)



const main = createSwitchNavigator({
    
    AppNavigator:AppNavigator
    
})

export default  createAppContainer(main);
