import { JSX } from 'react';
import { Text, Pressable, StyleProp, ViewStyle, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { PressableState, Props } from './types.ts';
import styles from './styles.ts';

const Button = ({ title, onPress, loading, icon }: Props): JSX.Element => {
  return (
    <Pressable
      style={({ pressed }: PressableState): StyleProp<ViewStyle> => [
        styles.container,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      {!loading ? (
        <View style={icon && styles.iconButtonContainer}>
          {icon && (
            <FontAwesomeIcon
              icon={icon.icon}
              size={icon.size}
              color={icon.color}
              style={icon.style}
            />
          )}
          <Text style={styles.text}>{title}</Text>
        </View>
      ) : (
        <LottieView
          source={require('../../assets/animations/loading.json')}
          style={styles.loading}
          autoPlay
          loop
        />
      )}
    </Pressable>
  );
};

export default Button;
