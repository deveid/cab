import React from 'react';
import styles from './style';
import {View} from 'native-base';
import MapView from 'react-native-maps';
import SearchBox from '../SearchBox';
import SearchResults from '../SearchResults';


export const MapContainer= ({region, getInputData,toggleSearchResultModal}) => {
  
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
      <SearchBox getInputData={getInputData} />
      {/* <SearchResults/> */}
    </View>
  )
}

export default MapContainer