import { useEffect, useState } from 'react'
import {
  Button,
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useQuery } from '@apollo/client'

import { CONTINENT_QUERY } from '../../gql/Query'

type itemTypes = {
  name?: string,
  code?: string
}

export const Links: React.FC = () => {
  const [links, setLinks] = useState([{}])
  const { data, loading, refetch } = useQuery(CONTINENT_QUERY)

  function appendToList() {
    const randomInt = Math.floor(Math.random() * 1000 + 1)
    const name = `Random-${randomInt}`
    const code = `CODE-${randomInt}`
    const randomObj = {
      __typename: 'Continent',
      code,
      name
    }

    setLinks([
      ...links,
      randomObj
    ])
  }

  const Item = ({ data }) => {
    const { code, name } = data

    return (
      <Pressable style={styles.pressable}>
        <View style={styles.view}>
          <Text style={styles.text}>Name: </Text>
          <Text style={styles.text}>{name}</Text>
        </View>
        <View style={styles.view}>
          <Text style={styles.text}>Code: </Text>
          <Text style={styles.text}>{code}</Text>
        </View>
      </Pressable>
    )
  }

  useEffect(() => {
    data?.continents && setLinks(data?.continents)
  }, [data?.continents])

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Fetching data...</Text>
      ) : (
        <>
          <Button
            title="Create Link"
            onPress={appendToList}
          />
          <FlatList
            style={styles.list}
            data={links}
            renderItem={({ item }: { item: itemTypes }) => <Item data={item} />}
            keyExtractor={(item, index) => `${item}-${index}`}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={refetch} />
            }
          />
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  list: {
    marginTop: 8
  },
  pressable: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 16
  },
  view: {
    flex: 1,
    flexDirection: 'row'
  },
  text: {
    marginRight: 8
  }
})
