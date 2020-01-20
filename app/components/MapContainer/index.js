import React from 'react';
import styles from './style';
import {View} from 'native-base';
import MapView from 'react-native-maps';
import SearchBox from '../SearchBox';

export const MapContainer= ({region}) => {
  return(
    <View style={styles.container}>
      <MapView
        provider={MapView.PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={region}
      >
      <MapView.Marker
        coordinate={region}
        pinColor="green"/>
      </MapView>
      <SearchBox/>
    </View>
  )
}

export default MapContainer