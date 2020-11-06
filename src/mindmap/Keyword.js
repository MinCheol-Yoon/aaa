import React from 'react'
import react,{ Component } from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default class Keyword extends Component{
    
    render(){
        
        return(
            
            this.props.ky.map((item,idx)=>(
                <View key = {idx}>
                <Text style = {{fontSize:25,
                    position:"absolute",
                    top:parseInt(idx/5)*40+4,
                    left:parseInt(idx%5)*140+150
                }}> {item} </Text>
                </View>
            ))
        )
    }
}

const styles = StyleSheet.create({
    k1:{
        top:1
    },
    k2:{
        top:11
    },
    k3:{
        top:21
    },
    k4:{
        top:31
    }

})