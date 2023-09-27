import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

export default function SignUpView() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [changePassword, setChangePassword] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

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

  const handleForgotPassword = () => {
    // Send password reset link to user's email
    alert(`Se ha enviado un enlace de restablecimiento de contraseña a ${email}`);
  };

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword) {
      return alert('Por favor, complete todos los campos');
    }
    alert('Contraseña cambiada exitosamente');
  };

  const renderForm = () => {
    if (forgotPassword) {
      return (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={setEmail}
          />
          <TouchableOpacity style={styles.buttonA} onPress={handleForgotPassword}>
            <Text style={styles.buttonText}>Enviar enlace de restablecimiento de contraseña</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setForgotPassword(false)}>
            <Text style={styles.switchText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (changePassword) {
      return (
        <View>
          <TextInput
            style={styles.input}
            placeholder="Contraseña actual"
            secureTextEntry
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Nueva contraseña"
            secureTextEntry
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity style={styles.buttonA} onPress={handleChangePassword}>
            <Text style={styles.buttonText}>Cambiar contraseña</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChangePassword(false)}>
            <Text style={styles.switchText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      );
    } else if (hasAccount) {
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
          <TouchableOpacity onPress={() => setForgotPassword(true)}>
            <Text style={styles.switchText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChangePassword(true)}>
            <Text style={styles.switchText}>Cambiar contraseña</Text>
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
          <TouchableOpacity style={styles.buttonA} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setHasAccount(true)}>
            <Text style={styles.switchText}>¿Ya tienes una cuenta? Inicia sesión</Text>
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