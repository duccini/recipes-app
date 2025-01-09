import React from 'react';
import {Text} from 'react-native';

import styles from './styles';

/**
 * Title.defaultProps = { text: 'Default Props' }
 */

const Title = ({text, style}) => {
  return <Text style={[styles.title, style]}>{text}</Text>;
};

export default Title;
