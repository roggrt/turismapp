import React from 'react';
import {StyleSheet, View, Text, Button, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/Ionicons"
import {Auth} from "../Base"
import {SingUpUser} from "../apiService"
import * as SQLite from 'expo-sqlite';
import { Input } from 'react-native-elements/dist/input/Input';

export function Singup({navigation}) {

    const[state, setState]=React.useState({
        id:'',
        correo:'',
        nombre:'',
        usuario:'',   
        password:'',
});
    const[showPassword, setShowPassword] = React.useState(false);
const [userr, setUser] = React.useState();
const signUp=()=>{
        SingUpUser(state.usuario, state.password).then((data)=>{
            alert(data)
        }).catch((error)=>{
            alert(error);
        })

}
function mostrarClave() {
    var tipo = document.getElementById
}
const onAuthStateChanged=user=>{
        setUser(user)
}
/*React.useEffect(()=>{
        const suscriber=Auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
},[])*/
    
        return(
            <View style={{backgroundColor:"#FFF", height:"100%"}}>
                               <Image source={require('../assets/images/Slide.jpg')}
                               style={{width:"100%", height:"30%"}}/>
                               <Text style={{marginTop:20, fontSize:28, alignSelf:"center", fontWeight:'bold'}}>
                               (๑･ิᴗ･ิ)۶ TurismApp ٩ʕ･ᴥ･ ʔ
                               </Text>
                               <Text style={{marginTop:10, fontSize:20, alignSelf:"center", fontWeight:'bold'}}>
                                Registro 
                               </Text>
                               <View style={{
                                       flexDirection:"row",
                                       alignItem:"center",
                                       marginHorizontal:55,
                                       borderWidth:2.5,
                                       marginTop:25,
                                       borderRadius:23,
                                       paddingHorizontal:10,  
                                       paddingVertical: 4,                                     
                                       borderColor:"#00516A"                                    
                               }}>
                                       <Icon name="mail-outline" color="#00516A" size={28}/>
                                       <TextInput placeholder=" Ingrese su correo" textContentType="emailAddress" 
                                       style={{fontSize:22, paddingHorizontal:15}} value={state.correo}
                                       onChangeText={text =>setState({...state,correo:text})}/>
                                    
                               </View>

                               <View style={{
                                       flexDirection:"row",
                                       alignItem:"center",
                                       marginHorizontal:55,
                                       borderWidth:2.5,
                                       marginTop:15,
                                       borderRadius:23,
                                       paddingHorizontal:10,  
                                       paddingVertical: 4,                                     
                                       borderColor:"#00516A"
                               }}>
                                     <Icon name="people-outline" color="#00516A" size={28}/>
                                       <TextInput placeholder="Ingrese su nombre"
                                       style={{paddingHorizontal:10, fontSize:22}} value={state.nombre}
                                       onChangeText={text =>setState({...state,nombre:text})}/>
                                </View>

                                <View style={{
                                       flexDirection:"row",
                                       alignItem:"center",
                                       marginHorizontal:55,
                                       borderWidth:2.5,
                                       marginTop:15,
                                       borderRadius:23,
                                       paddingHorizontal:10,  
                                       paddingVertical: 4,                                     
                                       borderColor:"#00516A"
                               }}>
                                     <Icon name="at-outline" color="#00516A" size={28}/>
                                       <TextInput placeholder="Escriba su usuario"
                                       style={{paddingHorizontal:10, fontSize:22}} value={state.usuario}
                                       onChangeText={text =>setState({...state,usuario:text})}/>
                                </View>

                                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} >
                                <View style={{
                                       flexDirection:"row",
                                       alignItem:"center",
                                       marginHorizontal:55,
                                       borderWidth:2.5,
                                       marginTop:15,
                                       borderRadius:23,
                                       paddingHorizontal:10,  
                                       paddingVertical: 4,                                     
                                       borderColor:"#00516A"
                               }}>
                                     <Icon name="lock-closed-outline" color="#00516A" size={28}/>        
                                                                 
                                       <TextInput 
                                       password={false}
                                        secureTextEntry={!showPassword} placeholder="Escriba su contraseña"                                         
                                       style={{paddingHorizontal:10, fontSize:22}} value={state.password}
                                       onChangeText={text =>setState({...state,password:text})}
                                       />
                                       
                                       <Icon 
                                        style={{paddingHorizontal:0}} name={showPassword ? "eye-off-outline" :"eye-outline"} color="#00516A" size={28} />  
                                       
                                </View>
                                
                                </TouchableOpacity>

                              

                               <TouchableOpacity 
                               onPress={()=>signUp()}>                               
                               <View style={{
                                       marginHorizontal: 50,
                                       marginTop: 30,
                                       backgroundColor: "#00516A",
                                       alignSelf: 'center',
                                       paddingVertical: 10,
                                       justifyContent: "center",
                                       paddingHorizontal: 90,
                                       borderRadius: 20,
                                        }}> 
                                
                                        <Text style={{fontSize: 20, alignSelf:'center', color:'white',
                               }}> Registrate </Text>                                
                                </View>
                               </TouchableOpacity>
                               
                               <View style={{
                                marginHorizontal: 50,
                                marginTop: 10,
                                
                                alignSelf: 'center',
                                paddingVertical: 10,
                                justifyContent: "center",
                               
                                borderRadius: 20,
                                 }}>                                         
                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{fontSize: 15, alignSelf:'center', color:'#00516A',
                                }}> Ya tienes una cuenta? <Text style={{fontWeight:'bold'}}> Inicia Sesion</Text> </Text>
                                </TouchableOpacity>
                                <View style={{paddingVertical: 20}}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                                <Text  style={{fontSize: 18, alignSelf:'center', color:'#00516A',
                                }}>  <Text style={{fontWeight:'bold'}}> Saltar  </Text> </Text>
                                </TouchableOpacity>
                                </View>                                
                         </View>
                        </View>
        ) 
    }
    const styles = StyleSheet.create({

    });
    export default Singup;
