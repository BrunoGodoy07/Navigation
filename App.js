import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { ImageBackground } from 'react-native-web';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const QueenQuieta = require('./assets/Queen_battle (1).gif')
const QueenGirando = require('./assets/Queen_battle_hurt.gif')
const doxeado = require('./assets/doxeado.png')
const fondoQueen = require('./assets/chapter2.jpg')


function FormScreen({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');

  const validarFormulario = () => {
    if (!nombre.trim() || !telefono.trim()) {
      alert('Por favor completá todos los campos.');
      return;
    }

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!soloLetras.test(nombre)) {
      alert('El nombre solo debe contener letras.');
      return;
    }

    const soloNumeros = /^[0-9]+$/;
    if (!soloNumeros.test(telefono)) {
      alert('El teléfono solo debe contener números.');
      return;
    }

    navigation.navigate('Confirmacion', { nombre, telefono });
  };

  return (
    <View style={[styles.screen, { backgroundColor: '#FFB6C1' }]}>
      <Text style={styles.label}>Nombre</Text>
      <TextInput style={styles.input} onChangeText={setNombre} value={nombre} />

      <Text style={styles.label}>Teléfono</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTelefono}
        value={telefono}
        keyboardType="phone-pad"
      />

      <Button title="Confirmar" onPress={validarFormulario} />
    </View>
  );
}


function ConfirmScreen({ route, navigation }) {
  const { nombre, telefono } = route.params;

  return (
    <View style={[styles.screen, { backgroundColor: '#FFB6C1' }]}>
      <Text style={styles.text}>Nombre: {nombre}</Text>
      <Text style={styles.text}>Tu teléfono es: {telefono}</Text>
      <Text style={styles.text}>Ip: 133.35.189.71</Text>
      <Text style={styles.text}>Direccion: Paseo Micaela, 57 - Coon Rapids, Man / 33401</Text>
      <Text style={styles.text}>Fecha de nacimiento: 09/08/2005</Text>
      <Text style={styles.text}>Mail: caridadriojas48@yahoo.com</Text>
      <Text style={styles.text}>Contraseña mail: 27Kv8pIyaBp028l</Text>
      <Text style={styles.text}>Tarjeta de credito: 50185993676644238</Text>
      <Text style={styles.text}>Código de seguirad: 860</Text>
      <Image source={doxeado}
          style={{ width: 100, height: 160, marginBottom: 20 }}
        />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StackUno() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Formulario" component={FormScreen} />
      <Stack.Screen name="Confirmacion" component={ConfirmScreen} />
    </Stack.Navigator>
  );
}

function Yellow1({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#FFF' }]}>
      
      <View style={styles.contenedor1}>
      <Image source={{ uri: 'https://static.tvtropes.org/pmwiki/pub/images/watercooler_7.png' }}
          style={{ width: 100, height: 160, marginBottom: 20 }}
        />
        <Image
          source={{ uri: 'https://i.redd.it/ftc6gxvsfb5f1.gif' }}
          style={{ width: 190, height: 300, marginBottom: 20 }}
        />
        
      </View>
      <Text style={styles.text}>Presiona aqui para patear el dispenser de agua.</Text>
      <Button title="Patear" onPress={() => navigation.navigate('Amarillo2')} 
      style={{color: '#dc143c'}}
      />
    </View>
  );
}

function Yellow2({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#FFF' }]}>
    <View style={styles.contenedor1}>
        <Image source={{ uri: 'https://static.tvtropes.org/pmwiki/pub/images/watercooler_7.png' }}
          style={{ width: 100, height: 160, marginBottom: 20 }}
        />
        <Image
          source={{ uri: 'https://i.redd.it/17xbtpvsfb5f1.gif' }}
          style={{ width: 190, height: 300, marginBottom: 20 }}
        />
      </View>
      <Button title="Dejar de patear" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StackDos() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Amarillo1" component={Yellow1} />
      <Stack.Screen name="Amarillo2" component={Yellow2} />
    </Stack.Navigator>
  );
}

function Green1({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#32CD32' }]}>
      <Text style={styles.text}>Pantalla Verde 1</Text>
      <Button title="Ir a Verde 2" onPress={() => navigation.navigate('Verde2')} />
    </View>
  );
}

function Green2({ navigation }) {
  return (
    <View style={[styles.screen, { backgroundColor: '#32CD32' }]}>
      <Text style={styles.text}>Pantalla Verde 2</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
}

function StackTres() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Verde1" component={Green1} />
      <Stack.Screen name="Verde2" component={Green2} />
    </Stack.Navigator>
  );
}

function Blue1({ navigation }) {
  return (
      <ImageBackground
      source={fondoQueen}>
        <View style={[styles.screen]}>
          <Image source={QueenQuieta} style={{ width: 210, height: 300, marginBottom: 20 }}/>
          <Button title="Girar" onPress={() => navigation.navigate('Azul2')} />
        </View>
      </ImageBackground>
  );
}

function Blue2({ navigation }) {
  return (
    
    <ImageBackground
    source={fondoQueen}
    resizeMode= 'cover'>
      <View style={[styles.screen]}>
      <Image
          source={QueenGirando}
          style={{ width: 210, height: 300, marginBottom: 20 }}
        />
      <Button title="Dejar de girar" onPress={() => navigation.goBack()} />
    </View>
    </ImageBackground>
    
  );
}

function StackCuatro() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Azul1" component={Blue1} />
      <Stack.Screen name="Azul2" component={Blue2} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Inicio') return <Ionicons name="person" size={size} color={color} />;
            if (route.name === 'Galería') return <Ionicons name="image" size={size} color={color} />;
            if (route.name === 'Naturaleza') return <Ionicons name="leaf" size={size} color={color} />;
            if (route.name === 'Info') return <Ionicons name="information-circle" size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Inicio" component={StackUno} />
        <Tab.Screen name="Galería" component={StackDos} />
        <Tab.Screen name="Naturaleza" component={StackTres} />
        <Tab.Screen name="Info" component={StackCuatro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  label: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    width: '100%',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    backgroundColor: 'white',
  },

  contenedor1: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
});
