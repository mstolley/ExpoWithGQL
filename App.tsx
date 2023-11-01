import { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ApolloProvider } from '@apollo/client'

import { Client } from './src/gql/Client'
import { UserContext } from './src/context/UserContext'
import { Login as LoginScreen } from './src/screens/Login'
import { Links as LinksScreen } from './src/screens/Links'

export type RootStackParamList = {
  LoginScreen: undefined
  LinksScreen: undefined
}

const initialUserValues = { email: '', password: '' }

const RootStack = createNativeStackNavigator<RootStackParamList>()

const App: React.FC = () => {
  const [user, setUser] = useState(initialUserValues)

  const isLoggedIn = user.email.length > 0 && user.password.length > 0

  function logoutUser({ navigation }) {
    setUser(initialUserValues)
    navigation.navigate('LoginScreen')
  }

  // NOTE: added to help verify user obj
  useEffect(() => {
    console.log('user: ', user)
  }, [user])
  
  return (
    <ApolloProvider client={Client}>
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationContainer>
          <RootStack.Navigator
            id='RootStack'
            initialRouteName="LoginScreen"
          >
            {isLoggedIn ? (
              <RootStack.Screen
                name="LinksScreen"
                component={LinksScreen}
                options={() => ({
                  title: 'Links',
                  headerRight: () => (
                    <Button
                      title="Log Out"
                      onPress={() => setUser(initialUserValues)}
                    />
                  ),
                })}
              />
            ) : (
              <RootStack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
            )}
          </RootStack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    </ApolloProvider>
  )
}

export default App
