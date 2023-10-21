import { View, Text } from 'react-native'
import React from 'react'

const FlexScreen = () => {
  return (
    <View style={{ backgroundColor: "grey", flex: 1, justifyContent: "center", flexDirection:"column", }}>
        <View style={{ backgroundColor: "grey", flex: 1, justifyContent: "center", flexDirection:"row", }}>
            <View style={{ backgroundColor: "#cc1616", flex: 2 }}>
            </View>
            <View style={{ backgroundColor: "#34cc16", flex: 3}}>
            </View>
            <View style={{ backgroundColor: "#1643cc", flex: 2 }}>
            </View>
        </View>
        <View style={{ backgroundColor: "grey", flex: 1, justifyContent: "center", flexDirection:"column", }}>
            <View style={{ backgroundColor: "#ccc016", flex: 2 }}>
            </View>
            <View style={{ backgroundColor: "#7a16cc", flex: 3}}>
            </View>
            <View style={{ backgroundColor: "#cc5916", flex: 2 }}>
            </View>
        </View>
    </View>
  )
}

export default FlexScreen
