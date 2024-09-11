Usage
# Reactor Toast

**Version:** 1.0.3

**Description:**  
Elevate your React Native and Expo applications with **Reactor Toast**, the ultimate toast notification component designed for simplicity and elegance. **Reactor Toast** provides a seamless way to display customizable and visually appealing toast messages, making it easy to enhance user feedback and notifications in your mobile apps.

## Installation

To install **Reactor Toast** in your React Native project, use npm or yarn:

```bash
npm install reactor-toast

// App
import React from 'react';
import {ToastProvider} from "reactor-toast"

const App = () => {
  return (
    <ToastProvider>
        <YourComponent>
    </ToastProvider>
  );
};

export default App;



---------

//YourComponent 
import React from 'react';
import { useToast } from 'reactor-toast';
import { Button, View } from 'react-native';

const YourComponent = () => {
  const { addToast } = useToast();

  const showErrorToast = () => {
    addToast({
      type: 'error',
      title: 'Error',
      description: 'My error message',
      position: 'top',
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Error Toast" onPress={showErrorToast} />
    </View>
  );
};

export default YourComponent;