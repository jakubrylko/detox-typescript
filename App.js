import SplashScreen from 'react-native-splash-screen'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { MemberProvider } from './src/context/MemberContext'
import AnimationScreen from './src/screens/AnimationScreen'
import CounterScreen from './src/screens/CounterScreen'
import ExtrasScreen from './src/screens/ExtrasScreen'
import HomeScreen from './src/screens/HomeScreen'
import ImagesScreen from './src/screens/ImagesScreen'
import AddMemberScreen from './src/screens/memberScreens/AddMemberScreen'
import EditMemberScreen from './src/screens/memberScreens/EditMemberScreen'
import MemberListScreen from './src/screens/memberScreens/MemberListScreen'
import ShowMemberScreen from './src/screens/memberScreens/ShowMemberScreen'

const homeFlow = createStackNavigator({
  Home: HomeScreen,
  Counters: CounterScreen,
  Members: MemberListScreen,
  Images: ImagesScreen,
  Animation: AnimationScreen,
  Extras: ExtrasScreen
})

homeFlow.navigationOptions = {
  title: 'Home',
  tabBarIcon: <FontAwesome5 name="home" size={20} />,
  tabBarAccessibilityLabel: 'Home'
}

const membersFlow = createStackNavigator({
  Members: MemberListScreen,
  ShowMember: ShowMemberScreen,
  AddMember: AddMemberScreen,
  EditMember: EditMemberScreen
})

membersFlow.navigationOptions = {
  title: 'Members',
  tabBarIcon: <MaterialCommunityIcons name="wallet-membership" size={20} />,
  tabBarAccessibilityLabel: 'Members'
}

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    homeFlow,
    Images: ImagesScreen,
    membersFlow
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  SplashScreen.hide()
  return (
    <MemberProvider>
      <App />
    </MemberProvider>
  )
}
