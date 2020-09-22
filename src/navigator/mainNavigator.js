import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Camera1105616Navigator from '../features/Camera1105616/navigator';
import Messaging2105615Navigator from '../features/Messaging2105615/navigator';
import BlankScreen0105613Navigator from '../features/BlankScreen0105613/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Camera1105616: { screen: Camera1105616Navigator },
Messaging2105615: { screen: Messaging2105615Navigator },
BlankScreen0105613: { screen: BlankScreen0105613Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
