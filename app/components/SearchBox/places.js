import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React from 'react';
import { Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

export const GooglePlacesInput = ({api}) => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      underlineColorAndroid='white'
      minLength={2} // minimum length of text to search
      autoFocus={true}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
 
      getDefaultValue={() => ''}
 
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: api,
        language: 'en', // language of the results
        types: [ "locality", "political", "geocode" ], // default: 'geocode'
        componentRestrictions: {country: "ng"}
      }}
 
      styles={{
        textInputContainer: {
          width: '100%',
          underlineColorAndroid: 'transparent',
          borderRadius: 10 ,
          borderColor: '#1faadb',
          backgroundColor : "#3679D1",

        },
        
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        },

      }}
 
      // currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      // currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        type: 'cafe'
      }}
      
      GooglePlacesDetailsQuery={{
        // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
        fields: 'formatted_address',
      }}
 
      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3',"geocode"]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
    //   predefinedPlaces={[homePlace, workPlace]}
 
      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
      renderLeftButton={()  => <Icon name="search" size={15} color="#FF5E3A" style={styles.icon} />}
    />            
  );
}

export default GooglePlacesInput;