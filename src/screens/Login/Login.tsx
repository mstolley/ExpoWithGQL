import { useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { UserContext } from '../../context/UserContext'

export const Login: React.FC = () => {
  const { setUser } = useContext(UserContext)

  return (
    <View style={styles.container}>
      <Button
        title="Log In"
        onPress={() => setUser({ email: 'test2', password: 'password' })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
