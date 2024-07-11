import React from "react";
import { TextInput, StyleSheet, View, TouchableOpacity,Button,Text } from "react-native";
import { Link, router, Stack } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <TextInput style={styles.loginInput} placeholder="User Name"placeholderTextColor="#888" />
      <TextInput style={styles.loginInput} placeholder="Password"placeholderTextColor="#888" />
         <TouchableOpacity style={styles.button} onPress={() => router.push('Dashboard')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    bottom:50,
  },
  loginInput: {
    height: 40,
    width: 300,
    borderColor: '#04644C',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
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
});
