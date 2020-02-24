import React, { useState } from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { useScreens } from 'react-native-screens'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import MealsNavigator from './Navigation/MealsNavigator'
import mealsReducer from './Store/Reducers/Meals'

useScreens()  //works behind the scenes ,, it is more bit more efficient


const rootReducer = combineReducers({
  meaals: mealsReducer
})

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return <AppLoading startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)} />
  }

  return (
    <Provider store={store}><MealsNavigator /></Provider>
  );
}

