import { createStackNavigator, createAppContainer } from 'react-navigation';
import splashScreen from 'screens/splash/SplashScreen';
import screens from 'res/screens';
import homeScreen from 'screens/home/HomeScreen'
const mainStack = createStackNavigator({
    splashScreen: {screen: splashScreen},
    homeScreen:{screen:homeScreen}
},
    {
        headerMode: 'none'
    }
)
const MainNavigation = createAppContainer(mainStack);
export default MainNavigation;
