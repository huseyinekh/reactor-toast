
# Reactor Toast

**Version:** 1.0.4

**Description:**  
Elevate your React Native and Expo applications with **Reactor Toast**, the ultimate toast notification component designed for simplicity and elegance. **Reactor Toast** provides a seamless way to display customizable and visually appealing toast messages, making it easy to enhance user feedback and notifications in your mobile apps.

## Installation

To install **Reactor Toast** in your React Native project, use `npm` or `yarn`:

```bash
npm install reactor-toast
```

Or with Yarn:

```bash
yarn add reactor-toast
```

## Usage

### App Setup

To integrate **Reactor Toast**, you need to wrap your app (or the top-level component) with the `ToastProvider`.

```tsx
// App.js or App.tsx
import React from 'react';
import { ToastProvider } from 'reactor-toast';

const App = () => {
  return (
    <ToastProvider>
      <YourComponent />
    </ToastProvider>
  );
};

export default App;
```

### Displaying Toasts in a Component

Inside your component, you can use the `useToast` hook to trigger toast messages.

```tsx
// YourComponent.js or YourComponent.tsx
import React from 'react';
import { useToast } from 'reactor-toast';
import { Button, View } from 'react-native';

const YourComponent = () => {
  const { addToast } = useToast();

  const showErrorToast = () => {
    addToast({
      type: 'error',            // Can be 'error', 'success', 'warning', 'info', 'primary'
      title: 'Error',
      description: 'My error message',  // Optional description
      position: 'top',           // 'top' or 'bottom'
      textStyle: { fontSize: 16, color: 'red' }, // Optional: Custom text style
      descriptionStyle: { color: 'lightgray' },  // Optional: Custom description style
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Show Error Toast" onPress={showErrorToast} />
    </View>
  );
};

export default YourComponent;
```

### Toast Configuration Options

You can customize the behavior and appearance of the toast using the following options when calling `addToast`:

| Prop            | Type                                       | Default  | Description                                                                                  |
|-----------------|--------------------------------------------|----------|----------------------------------------------------------------------------------------------|
| `type`          | `"error" | "success" | "warning" | "info" | "primary"` | Required | Sets the toast type which also controls its background color.                                |
| `position`      | `"top" | "bottom"`                         | Required | Determines whether the toast shows at the top or bottom of the screen.                        |
| `description`   | `string`                                   | `""`     | Optional description text to provide more context.                                            |
| `descriptionStyle` | `TextStyle`                             | `null`   | Custom styles for the description text.                                                       |
| `textStyle`     | `TextStyle`                                | `null`   | Custom styles for the title text.                                                             |
| `onClose`       | `() => void`                               | `null`   | Callback function triggered when the toast is closed.                                         |
| `autoHide`      | `boolean`                                  | `true`   | Whether the toast should automatically hide after a duration.                                 |
| `duration`      | `number`                                   | `3000`   | The duration (in milliseconds) for which the toast is visible before auto-hiding.             |
| `style`         | `ViewStyle`                                | `null`   | Custom styles for the toast container.                                                        |
| `visible`       | `boolean`                                  | `true`   | Manually control the visibility of the toast.                                                 |
| `title`         | `string`                                   | Required | The main title text for the toast.                                                            |
| `id`            | `number`                                   | `null`   | Optional identifier for the toast (useful for managing multiple toasts).                      |

---

### Example Usage:

```tsx
addToast({
  type: 'warning',
  title: 'Warning',
  description: 'This is a warning message!',
  position: 'bottom',
  textStyle: { color: 'yellow', fontSize: 18 },
  descriptionStyle: { color: 'lightyellow' },
  onClose: () => console.log('Toast closed'),
  autoHide: true,
  duration: 4,
});
```

With **Reactor Toast**, you have full control over styling, visibility, and user interaction to provide elegant feedback in your React Native apps.
