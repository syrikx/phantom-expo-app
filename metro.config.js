// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

// Add Node.js polyfills for crypto support
config.resolver.alias = {
  crypto: require.resolve('react-native-crypto'),
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer'),
};

config.resolver.fallback = {
  crypto: require.resolve('react-native-crypto'),
  stream: require.resolve('stream-browserify'),
  buffer: require.resolve('buffer'),
};

module.exports = config;
