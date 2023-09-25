import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function SignUpView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const handleSignUp = () => {
    if (!username || !password || !confirmPassword) {
      return alert('Por favor, complete todos los campos');
    }
    confirmPassword === password ? alert(`Bienvenido ${username}`) : alert('Las contraseñas no coinciden');
  };

  const handleLogin = () => {
    if (!username || !password) {
      return alert('Por favor, complete todos los campos');
    }
    alert(`Bienvenido ${username}`);
  };

  const renderForm = () => {
    if (hasAccount) {
      return (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={styles.buttonA} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar contraseña"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity style={styles.buttonB} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.mainImage}
        source={require('./assets/planet_1.png')}
      />
      <Text style={styles.title}>E A S A</Text>
      <Text style={styles.titleDown}>Earth Aeronautics and Space Administration</Text>
      {renderForm()}
      <View style={styles.buttonLine}>
      <TouchableOpacity onPress={() => setHasAccount(!hasAccount)}>
        <Text style={styles.switchText}>
          {hasAccount ? '¿No tienes una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
        </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  titleDown: {
    fontSize: 12,
    fontWeight: '100',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%',
  },
  buttonA: {
    backgroundColor: 'gray',
    padding: 12,
    borderRadius: 4,
    margin: 24,
  },
  buttonB: {
    backgroundColor: 'black',
    padding: 12,
    borderRadius: 4,
    margin: 24,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainImage: {
    width: 100,
    height: 100,
  },
  buttonLine:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 48,
  }
});