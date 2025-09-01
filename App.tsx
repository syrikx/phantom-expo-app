import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import { PhantomProvider, useConnect, useAccounts } from '@phantom/react-native-sdk';

function WalletScreen() {
  const { connect, isLoading } = useConnect();
  const accounts = useAccounts();

  const handleConnect = async () => {
    try {
      const result = await connect();
      Alert.alert('Success', `Connected to Phantom wallet: ${result.accounts[0]?.address}`);
    } catch (error) {
      Alert.alert('Error', `Failed to connect: ${error}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phantom Wallet Integration</Text>
      
      {accounts.length > 0 ? (
        <View style={styles.connectedContainer}>
          <Text style={styles.connectedText}>Connected!</Text>
          <Text style={styles.addressText}>
            Address: {accounts[0]?.address?.substring(0, 8)}...
          </Text>
        </View>
      ) : (
        <TouchableOpacity 
          style={[styles.button, isLoading && styles.buttonDisabled]}
          onPress={handleConnect}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Connecting...' : 'Connect Phantom Wallet'}
          </Text>
        </TouchableOpacity>
      )}
      
      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <PhantomProvider
      config={{
        organizationId: 'phantom-expo-test-app-2024', // Temporary test organization ID
        scheme: 'phantom-expo-app',
        addressTypes: ['solana', 'ethereum'],
        apiBaseUrl: 'https://api.phantom.app'
      }}
    >
      <WalletScreen />
    </PhantomProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#9945FF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonDisabled: {
    backgroundColor: '#cccccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  connectedContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#9945FF',
  },
  connectedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9945FF',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'monospace',
  },
});
