import React from 'react'
import { View, Text,Image } from 'react-native'
import { styles } from './styles'

export const Slide = (props) => {

  const { title } = props;

  return (
    <View style={styles.slide}>
      <Text >
        {title}
      </Text>
      <Image source={props.image} style={styles.bg}/>
    </View>
  );
}

export default Slide;