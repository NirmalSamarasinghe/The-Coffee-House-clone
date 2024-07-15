import React from "react";
import { TextInput, StyleSheet, View, TouchableOpacity,Button,Text,Image } from "react-native";
import { Link, router, Stack } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/beens.png')}style={styles.bgImg} />
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subTitel}>Hey!Good to see you againg.</Text>
      <TextInput style={styles.loginInput} placeholder="User Name"placeholderTextColor="#888" />
      <TextInput style={styles.loginInput} placeholder="Password"placeholderTextColor="#888" />
      <Link href="/Register" style={styles.newAccount}>Create an Account</Link>
      <Link href="/Register" style={styles.forgetPassword}>Forget Password</Link>
         <TouchableOpacity style={styles.button} onPress={() => router.push('Dashboard')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.options}>or</Text>
      <Image source={require('../assets/images/google.png')}style={styles.socilIcon} />
      <Image source={require('../assets/images/fb.png')}style={styles.socilIcon} />
      <Image source={require('../assets/images/apple.png')}style={styles.socilIcon} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CECECE',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    position: 'relative',
    top: 110,
  },
  subTitel: {
    fontSize: 20,
    position: 'relative',
    top: 115,
  },
  loginInput: {
    height: 40,
    width: 300,
    top:140,
    borderColor: '#04644C',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    position:'relative',
    top:128,
    backgroundColor: '#04644C',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bgImg: {
   width: 1000, 
   height: 800,
   position: 'absolute',
   right: -180,
   top:10, 
   transform: [{rotate:'-65deg'}]
  },
  newAccount: {
    color: '#04644C',
    fontSize: 16,
    right: 90,
    textDecorationLine: 'underline',
    position: 'relative',
    top: 130,
  },
  forgetPassword: {
    color: '#04644C',
    fontSize: 16,
    left: 90,
    textDecorationLine: 'underline',
    position: 'relative',
    top: 110,
  },
  options: {
    fontSize: 18,
    color: '#04644C',
    position: 'relative',
    top: 145,
  },
  socilIcon:{
    position: 'relative',
    width:35,
    height: 35,
    display: 'flex',
  }
  // googleIcon: {
  //   width: 35,
  //   height: 35,
  //   position: 'relative',
  //   top: 190,
  //   right: 40,
  // },
  // fbIcon: {
  //   width: 35,
  //   height: 35,
  //   position: 'relative',
  //   top: 147,

  // },
  // appleIcon: {
  //   width: 35,
  //   height: 35,
  //   position: 'relative',
  //   top: 105,
  //   left: 50,
  // },
});
