import { View, Text } from 'react-native'
import React from 'react'

const HomeWork = () => {
  return (
    <View style={{ backgroundColor: "#cfd1cf", flex: 1, flexDirection: "row" , justifyContent: "space-between"}}>
        <View style={{flex: 8, justifyContent: "space-between" }}>
            <View style={{backgroundColor: "#a6ada7", flex: 5, justifyContent:"center", alignItems: "center",marginHorizontal: 8, marginTop: 8}}>
                <View style={{backgroundColor: "yellow", height: 80, width: 60}}></View>
            </View>
            <View style={{flex: 5, flexDirection: "row", justifyContent:'space-between', margin: 8}}>
                <View style={{backgroundColor: "#99e8a4", width: 65, height: "auto"}}></View>
                <View style={{backgroundColor: "#99e8a4", width: 65, height: "auto"}}></View>
                <View style={{backgroundColor: "#99e8a4", width: 65, height: "auto"}}></View>
                <View style={{backgroundColor: "#99e8a4", width: 65, height: "auto"}}></View>
            </View>
        </View>
        <View style={{flex: 2, flexDirection: "column", justifyContent:"space-between",marginVertical: 8, marginRight: 8,}}>
            <View style={{backgroundColor: "#e3a581", height:226, width:"auto"}}></View>
            <View style={{backgroundColor: "#e3a581", height:226, width:"auto"}}></View>
            <View style={{backgroundColor: "#e3a581", height:226, width:"auto"}}></View>
        </View>
    </View>
  )
}

export default HomeWork