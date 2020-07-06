import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Login from './pages/Login'
import SignInSelectAccType from './pages/SignInSelectAccType'
import SignInClient from './pages/SignInClient'
import SignInPoint from './pages/SignInPoint'
import SignInPending from './pages/SignInPending'
import Dashboard from './pages/Dashboard'
import Reservation from './pages/Reservation'
import Gifts from './pages/Gifts'
import Detail from './pages/Detail'
import Profile from './pages/Profile'

const AppStack = createStackNavigator()

const Routes = () => {
  return(
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#AA0D2B'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Login" component={Login} />
        <AppStack.Screen name="SignInSelectAccType" component={SignInSelectAccType} />
        <AppStack.Screen name="SignInClient" component={SignInClient} />
        <AppStack.Screen name="SignInPoint" component={SignInPoint} />
        <AppStack.Screen name="SignInPending" component={SignInPending} />
        <AppStack.Screen name="Dashboard" component={Dashboard} />
        <AppStack.Screen name="Reservation" component={Reservation} />
        <AppStack.Screen name="Gifts" component={Gifts} />
        <AppStack.Screen name="Detail" component={Detail} />
        <AppStack.Screen name="Profile" component={Profile} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default Routes