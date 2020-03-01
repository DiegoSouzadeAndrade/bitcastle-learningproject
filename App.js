import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import ComponetsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorsScreen from './src/screens/ColorsScreen';
import SquareScreen from './src/screens/SquareScreen';


const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponetsScreen,
    Lists: ListScreen,
    Images: ImageScreen,
    Counter: CounterScreen,
    Colors: ColorsScreen,
    Square: SquareScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App'
    }
  }
);

export default createAppContainer(Navigator);