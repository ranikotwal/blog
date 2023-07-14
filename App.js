import React from 'react';
import { createAppContainer } from 'react-navigation';
import { CreateNavigatorConfig } from 'react-navigation';
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { createStackNavigator } from 'react-navigation-stack';


const navigator = createStackNavigator(
  {
  Index: IndexScreen,
  Show:ShowScreen,
  Create: CreateScreen,
  Edit: EditScreen
  },

  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog',
    },
  }
);

const App = createAppContainer(navigator);

export default () =>{
  return (
    <Provider>
      <App/>
    </Provider>
  );
};