import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';

const AppStack = createStackNavigator({ Home: HomeScreen });

export default createAppContainer(
    createSwitchNavigator({
        App: AppStack,
        SignIn: SignInScreen
    }, {
        initialRouteName: "SignIn"
    })
)