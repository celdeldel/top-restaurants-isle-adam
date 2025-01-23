import React from 'react';
import styles from './RestaurantMap.module.css';

const RestaurantMap = ({ restaurants }) => {
  const mapUrl = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=restaurants+L'Isle-Adam+France&zoom=15`;

  return (
    <div className={styles.mapContainer}>
      <iframe
        title="Carte des restaurants"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={mapUrl}
      />
    </div>
  );
};

export default RestaurantMap;