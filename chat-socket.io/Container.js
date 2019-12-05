import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ChatScreen from './screens/ChatScreen';
import SignInScreen from './screens/SignInScreen';
import OnlineListScreen from './screens/OnlineListScreen';

const AppStack = createStackNavigator({ Home: OnlineListScreen, Chat: ChatScreen });

export default createAppContainer(
    createSwitchNavigator({
        App: AppStack,
        SignIn: SignInScreen
    }, {
        initialRouteName: "SignIn"
    })
) 