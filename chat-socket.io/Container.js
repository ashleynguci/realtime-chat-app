import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import OnlineListScreen from './screens/OnlineListScreen';

const AppStack = createStackNavigator({ Home: OnlineListScreen });

export default createAppContainer(
    createSwitchNavigator({
        App: AppStack,
        SignIn: SignInScreen
    }, {
        initialRouteName: "SignIn"
    })
) 