import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Image, TouchableOpacity } from 'react-native';

// Component to display images
const DisplayAnImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.tinyLogo}
        source={{ uri: 'https://lh3.googleusercontent.com/proxy/AkTQz3183o…fq8qV0fLBRcKP9HwOfb-ZQh5_FLs51GY9BjkR75US06u7juav' }}
      />
      <Image
        style={styles.logo}
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:AN…cT1EFGMuBrAeF7s-IGyavyG6mURkqVoY68GWJIFo&usqp=CAU' }}
      />
    </View>
  );
};

// Main screen component
export default function HomeScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Đăng Nhập Thành Công', `Tên người dùng: ${username}`);
    } else {
      Alert.alert('Đăng Nhập Thất Bại', 'Vui lòng nhập cả tên người dùng và mật khẩu.');
    }
  };

  const handleRegister = () => {
    if (registerUsername && registerEmail && registerPassword && registerConfirmPassword) {
      if (registerPassword === registerConfirmPassword) {
        Alert.alert('Đăng Ký Thành Công', `Tên người dùng: ${registerUsername}`);
      } else {
        Alert.alert('Đăng Ký Thất Bại', 'Mật khẩu xác nhận không khớp.');
      }
    } else {
      Alert.alert('Đăng Ký Thất Bại', 'Vui lòng điền đầy đủ thông tin.');
    }
  };

  return (
    <View style={styles.container}>
      <DisplayAnImage /> {/* Display images */}

      {isRegistering ? (
        <>
          <Image
            style={styles.authLogo}
            source={{ uri: 'https://example.com/register-logo.png' }} // Replace with actual register logo URL
          />
          <Text style={styles.title}>Đăng Ký</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Tên người dùng"
              value={registerUsername}
              onChangeText={setRegisterUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={registerEmail}
              onChangeText={setRegisterEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              secureTextEntry
              value={registerPassword}
              onChangeText={setRegisterPassword}
            />
            <TextInput
              style={styles.input}
              placeholder="Xác nhận mật khẩu"
              secureTextEntry
              value={registerConfirmPassword}
              onChangeText={setRegisterConfirmPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleRegister}>
              <Text style={styles.buttonText}>Đăng Ký</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsRegistering(false)} style={styles.switchContainer}>
              <Text style={styles.switchText}>Đã có tài khoản? Đăng nhập</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Image
            style={styles.authLogo}
            source={{ uri: 'https://example.com/login-logo.png' }} // Replace with actual login logo URL
          />
          <Text style={styles.title}>Đăng Nhập</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Tên người dùng"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Mật khẩu"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Đăng Nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsRegistering(true)} style={styles.switchContainer}>
              <Text style={styles.switchText}>Chưa có tài khoản? Đăng ký</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Center-align items horizontally
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formContainer: {
    width: '90%', // Adjust the width to make the box smaller
    maxWidth: 360, // Optional: Set a maximum width for larger screens
    backgroundColor: '#112D60',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12, // Adjust the margin for better spacing
    backgroundColor: '#fafafa',
    width: '100%', // Full width of the form container
  },
  authLogo: {
    width: 100, // Adjust the logo size as needed
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  switchText: {
    color: '#1E90FF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },

});
