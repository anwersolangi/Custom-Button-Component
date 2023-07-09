import React from 'react';
import {Pressable, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function Button({
  onPress,
  color = '#2ED3FF',
  textColor = 'white',
  iconPosition = 'left',
  iconSize = 24,
  iconColor = 'white',
  icon,
  isDisabled = false,
  loading = false,
  title,
  style = [],
  textStyle = [],
  iconStyle = [],
  iconProps,
  spinnerColor = 'white',
  children,
  childrenPosition = 'start',
  spinnerProps,
  ...props
}) {
  const backgroundColor = color;
  function _onPressHandler() {
    if (isDisabled || loading) {
      return;
    }
    if (onPress && typeof onPress === 'function') {
      return onPress();
    }
  }

  return (
    <Pressable
      style={[
        styles.container,
        {backgroundColor},
        isDisabled && styles.disabledStyle,
        style,
      ]}
      onPress={_onPressHandler}
      {...props}>
      {childrenPosition === 'start' && children && children}
      {iconPosition === 'left' && icon && (
        <Icon name={icon} size={iconSize} color={iconColor} style={iconStyle} />
      )}
      {loading ? (
        <ActivityIndicator color={spinnerColor} {...spinnerProps} />
      ) : (
        <Text style={[styles.title, {color: textColor}, textStyle]}>
          {title}
        </Text>
      )}
      {iconPosition === 'right' && icon && (
        <Icon name={icon} size={iconSize} color={iconColor} style={iconStyle} />
      )}
      {childrenPosition === 'end' && children && children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
  },
  disabledStyle: {
    backgroundColor: '#909096',
  },
  title: {
    fontSize: 15,
    marginHorizontal: 8,
  },
});

export default Button;
