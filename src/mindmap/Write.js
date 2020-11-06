import React, {Component} from 'react';
import { StyleSheet,Button ,Text, View ,TouchableOpacity,Image,TextInput, Alert} from 'react-native';
import line from '../assets/line.png'
import Access from './access'
import Back from './Back';
import HateModal from './Hate_modal'
var a = 20
var b = 15

class Writing extends Component{
    state = {
        text: '',
        probit: {"Result": 0},
    }
    mak = async () => {
        var axios = require('axios');
        var qs = require('qs');
        var a = this.state.text
        axios
          .post("http://34.64.229.36/test", {
            name: a})
          .then(({data}) => {
            this.setState({ 
                probit : data
              });
            console.log(data)
            
          })
          .catch(e => {  // API 호출이 실패한 경우
            console.error(e);  // 에러표시
            
          });
          
    }
    onFormSubmit = e =>{
        e.preventDefault();
       
    }
    clickBtn = ()=>{
        this.mak()
        console.log(this.state.probit.Result)
        if(this.state.probit.Result == 0)
            console.log("aa")
        
    }
    render(){
        
        return(
            <>
                
               
                <View style = {styles.rec}/>
                <Image source={line} style = {styles.line}/>
                <View style = {styles.rec1}/>
                
                <HateModal
                    num = {this.state.probit.Result}
                    
                />
                
                
                <Access/>
                <TouchableOpacity style = {styles.a11} />
                <TouchableOpacity style = {styles.a22} onPress = {this.clickBtn} />
                <TouchableOpacity style = {styles.a33} />
                <TouchableOpacity style = {styles.a44} />
                <View style = {styles.rrr1}/>
                <View style = {styles.rr1}>
                    <Text style = {styles.book_font}>
                    그림 독후감
                    </Text>
                </View>
                
                    <TextInput
                        placeholder={'글을 입력해 보아요'}
                        multiline = {true}
                        style = {styles.TextInput}
                        value={this.state.text}
                        onChangeText={(text)=>this.setState({text})}
                    >
                    </TextInput>
                    
                    <TouchableOpacity
                        style = {styles.a222}
                        onPress = {()=>this.clickBtn()}/>
                    
            </>
        )
    }
    
}

const styles = StyleSheet.create({
    a222:{
        position:'absolute',
        width:75,
        height:75,
        left:35,
        top:194,
        backgroundColor: 'rgba(0,0,0,1)',
        borderRadius:10,
        zIndex:100
    },
    a11:{
        position:'absolute',
        width:75,
        height:75,
        left:75,
        top:94,
    },
    a22:{
        position:'absolute',
        width:75,
        height:75,
        left:75,
        top:194,
    },
    a33:{
        position:'absolute',
        width:75,
        height:75,
        left:75,
        top:294,
        
    },
    a44:{
        position:'absolute',
        width:75,
        height:75,
        left:75,
        top:394,
        
        
    },
    
    rec: {
        position:'absolute',
        width:865,
        height:501,
        left:208,
        top:172,
        backgroundColor:"#FFFDF2",
        borderRadius:20
    },
    line:{
        position:'absolute',
        width:745,
        height:431,
        left:256,
        top:218,
    },
    TextInput:{
        position:'absolute',
        width:745,
        height:48,
        left:256,
        top:178
    },
    rrr1 : {
        position: 'absolute',
        width:152,
        height:43,
        left:245,
        top: 77,
        backgroundColor: "#668D8D",
        borderRadius:10
    },
    rr1 : {
        position: 'absolute',
        width:152,
        height:32,
        left:245,
        top: 88,
        backgroundColor: "#668D8D",
    },
    book_font:{
        zIndex:100,
        position:"absolute",
        left: 30,
        textAlign: 'center',
        fontFamily: "BM HANNA_TTF",
        fontWeight: 'normal',
        fontStyle: 'normal',
        fontSize: 20,
        lineHeight: 20,
        letterSpacing: 0.1,
        color:"#FFFFFF"
    }
})
export default Writing;