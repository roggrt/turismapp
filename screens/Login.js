import * as React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
//import auth from "@react-native-firebase/auth";
import { TextInput } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Ionicons";
import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";

import { Auth } from "../Base";
export function Login({ navigation }) {
  const [state, setState] = React.useState({
    usuario: "",
    password: "",
  });
  const signUp = () => {
    alert(JSON.stringify(state));
  };
  const onAuthStateChanged = (user) => {
    setUser(user);
  };
//  React.useEffect(() => {
    //  const suscriber=Auth().onAuthStateChanged(onAuthStateChanged);
 //   return subscriber;
 // }, []);

  return (
    
    <View 
    style={{ backgroundColor: "#FFF", height: "100%" }}>
      <Image source={require("../assets/images/Cuenca.jpg")}
        style={{ width: "100%", height: "40%" }}/>
             
      <Text
        style={{
          marginTop: 20,
          fontSize: 28,
          alignSelf: "center",
          fontWeight: "bold",
        }}
      >
        (๑･ิᴗ･ิ)۶ TurismApp٩ ʕ･ ᴥ･ ʔ
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItem: "center",
          marginHorizontal: 55,
          borderWidth: 2.5,
          marginTop: 50,
          borderRadius: 23,
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderColor: "#00516A",
        }}
      >
        <Icon name="mail-outline" color="#00516A" size={28} />
        <TextInput
          style={{ paddingHorizontal: 15 }}
          value={state.usuario}
          onChangeText={(text) => setState({ ...state, usuario: text })}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItem: "center",
          marginHorizontal: 55,
          borderWidth: 2.5,
          marginTop: 25,
          borderRadius: 23,
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderColor: "#00516A",
        }}>
        <Icon name="lock-closed-outline" color="#00516A" size={28}/>
        <TextInput
          secureTextEntry
          style={{ paddingHorizontal: 10 }}
          value={state.password}
          onChangeText={(text) => setState({ ...state, password: text })}/>
        </View>
      <TouchableOpacity onPress={() => signUp()}>
        
        <View style={{ marginHorizontal: 50, marginTop: 30,backgroundColor: "#00516A",alignSelf: "center",
            paddingVertical: 10,justifyContent: "center",
            paddingHorizontal: 90,
            borderRadius: 20,
          }}>
        
          <Text
            style={{
              fontSize: 20,
              alignSelf: "center",
              color: "white",
            }}>login</Text>
           </View></TouchableOpacity>     
       <View
        style={{
          marginHorizontal: 50,
          marginTop: 10,
          alignSelf: "center",
          paddingVertical: 10,
          justifyContent: "center",
          borderRadius: 20,
        }}>     
        <TouchableOpacity onPress={() => navigation.navigate("Singup")}>
          <Text
            style={{
              fontSize: 18,
              alignSelf: "center",
              color: "#00516A",}}>             
            No tienes cuentita ?
            <Text style={{ fontWeight: "bold" }}> Registrate </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Login;
