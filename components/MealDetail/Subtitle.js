import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
    <Text style= {styles.subtitle}>{children}</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  subtitle: {
    color: '#5b1c1c',
    fontSize: 18,
    fontWeight: 'bold',   
    textAlign: 'center',
    
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: '#852a2a',
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,

  }


})