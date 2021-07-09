import React from 'react';
import PropTypes from 'prop-types';
import { GoogleMapProvider } from '@googlemap-react/core';
import { MapBox, Marker } from '@googlemap-react/core';

const GoogleMap = ({ input }) => {

  const XCor = input.lat;
  const YCor = input.lng;

  return (
    <div className="pb-1 mt-2 border-bottom">
      <GoogleMapProvider>
        <MapBox
          apiKey=''
          opts={{ center: { lat: XCor, lng: YCor }, zoom: 15 }}
          style={{ height: '300px', width: '100%' }}
        />
      </GoogleMapProvider>
    </div>
  );
};

GoogleMap.propTypes = {

};

export default GoogleMap;
