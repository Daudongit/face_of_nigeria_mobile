import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

// stacks
// import HomeStack from './homeStack';
// import AboutStack from './aboutStack';

import History from '../screens/history';
import Event from '../screens/event';
import Ticket from '../screens/ticket';
import Training from '../screens/training';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
  History: {
    screen: History,
  },
  Event: {
    screen: Event,
  },
  Ticket: {
    screen: Ticket,
  },
  Training: {
    screen: Training,
  },
});

export default createAppContainer(RootDrawerNavigator);