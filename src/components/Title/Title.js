import React from 'react'
import { Text, StyleSheet } from 'react-native'

const Title = ({title}) => {
  return (
    <Text style={styles.text}>
      {title}
    </Text>
  )
}

const styles = StyleSheet.create({
  text:{
    textAlign:'center',
    fontSize:20,
    marginTop:20,
    marginBottom:20
  }
})

export default Title
