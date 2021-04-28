import React from 'react';
import {StyleSheet, View, Text, TextInput, Button, Dimensions} from 'react-native';

const Principal=()=>{
    return(
<View style={styles.container}>
    
<TextInput
          style={styles.input}
          placeholder={this.props.placeholder}
          secureTextEntry={this.props.secureTextEntry}
          autoCorrect={this.props.autoCorrect}
          autoCapitalize={this.props.autoCapitalize}
          returnKeyType={this.props.returnKeyType}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
        />
</View>
    );
};
export default Principal;