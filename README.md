# Phantom Expo App

React Native Expo application with Phantom wallet integration for Solana and Ethereum.

## Features

- 🔐 **Phantom Wallet Integration**: Connect to Phantom wallet using official React Native SDK
- 📱 **Cross-Platform**: Supports both iOS and Android
- ⚡ **Modern UI**: Clean interface with connection status display
- 🌐 **Multi-Chain**: Supports Solana and Ethereum address types
- 🚀 **Expo Framework**: Built with Expo for easy development and deployment

## Quick Start

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g @expo/cli`)
- Phantom wallet app installed on your device

### Installation

```bash
# Clone repository
git clone https://github.com/syrikx/phantom-expo-app.git
cd phantom-expo-app

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npx expo start

# Run on specific platforms
npx expo start --android
npx expo start --ios
npx expo start --web
```

### Testing the App

1. Install Phantom app on your mobile device
2. Run `npx expo start` 
3. Scan QR code with Expo Go app
4. Tap "Connect Phantom Wallet" button
5. Approve connection in Phantom app

## APK Download

Due to Android SDK setup requirements, we recommend running the app using Expo Go:

1. Install [Expo Go](https://expo.dev/client) on your Android device
2. Scan the QR code from `npx expo start`
3. Test the Phantom wallet integration

For production APK builds, you can:
- Set up Android Studio with proper SDK paths
- Use EAS Build cloud service with proper credentials
- Contact the maintainers for pre-built APK files

## Configuration

### Organization ID

Update the `organizationId` in `App.tsx`:

```typescript
<PhantomProvider
  config={{
    organizationId: 'your-phantom-organization-id', // Replace with actual ID
    scheme: 'phantom-expo-app',
    addressTypes: ['solana', 'ethereum']
  }}
>
```

Get your organization ID from [Phantom Developer Console](https://phantom.com/developers).

### App Branding

Customize app name, icon, and splash screen in `app.json`:

```json
{
  "expo": {
    "name": "Your App Name",
    "icon": "./assets/your-icon.png",
    "splash": {
      "image": "./assets/your-splash.png"
    }
  }
}
```

## Build APK

For local APK builds, ensure you have:

1. Android Studio installed
2. Android SDK configured
3. ANDROID_HOME environment variable set

```bash
# Build APK locally
npx expo run:android --variant release

# Or use EAS Build
npx eas build -p android --profile preview
```

## Project Structure

```
phantom-expo-app/
├── App.tsx                 # Main app component with Phantom integration
├── app.json               # Expo configuration
├── eas.json               # EAS Build configuration
├── package.json           # Dependencies
├── assets/                # App icons and images
└── node_modules/          # Installed packages
```

## Technologies Used

- **React Native**: Cross-platform mobile development
- **Expo**: Development platform and tools
- **Phantom React Native SDK**: Official wallet integration
- **TypeScript**: Type safety

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

- 📧 Issues: [GitHub Issues](https://github.com/syrikx/phantom-expo-app/issues)
- 📖 Phantom Docs: [Official Documentation](https://docs.phantom.com/)
- 🛠 Expo Docs: [Expo Documentation](https://docs.expo.dev/)

---

Built with ❤️ using Phantom React Native SDK