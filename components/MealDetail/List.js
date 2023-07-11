import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function List({data}) {
  return (
    data.map((dataPoint) => (
      <View key={dataPoint} style={styles.listItem}>
       <Text style={styles.itemText} >{dataPoint}</Text>

      </View>
      ))
  )
}

const styles = StyleSheet.create({
    listItem: {
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginVertical: 8,
      marginHorizontal: 12,
      backgroundColor: '#cd9977cc',
      
    },
    itemText: {
      color: '#591d1d',
      textAlign: 'center',
      justifyContent: 'center',
    },


})