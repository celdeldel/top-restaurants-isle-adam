import React from 'react';
import styles from './RestaurantMap.module.css';

const RestaurantMap = () => {
  // Centre de L'Isle-Adam
  const center = '49.1124,2.2150';
  
  // Construction de l'URL avec les restaurants
  const locations = [
    'Lokanta+SteakHouse+L\'Isle-Adam',
    'L\'Ami+Pinot+L\'Isle-Adam',
    'L\'Atelier+Restaurant+L\'Isle-Adam',
    'Le+Shadock+L\'Isle-Adam',
    'THE+BEEF\'YS+L\'Isle-Adam',
    'La+Cambuse+L\'Isle-Adam',
    'Le+Petit+Vatel+L\'Isle-Adam',
    'Table+de+Cassan+L\'Isle-Adam',
    'L\'Imprevu+L\'Isle-Adam',
    'Le+Loft+L\'Isle-Adam',
    'Les+Enfants+Terribles+L\'Isle-Adam',
    'Le+Nautilus+L\'Isle-Adam',
    'Gigi+L\'Isle-Adam',
    'Le+Mauricette+L\'Isle-Adam',
    'Le+Tropézien+L\'Isle-Adam',
    'Le+Nid+Restaurant+L\'Isle-Adam',
    'Le+Purple+2+L\'Isle-Adam',
    'La+Môme+L\'Isle-Adam',
    'Amicitia+Restaurant+L\'Isle-Adam',
    'L\'Affiche+bis+L\'Isle-Adam'
  ].join('|');

  const mapUrl = `https://www.google.com/maps/embed/v1/search?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${locations}&center=${center}&zoom=15`;

  return (
    <div className={styles.mapContainer}>
      <h2 className={styles.mapTitle}>Carte des restaurants</h2>
      <div className={styles.mapWrapper}>
        <iframe
          title="Carte des restaurants de L'Isle-Adam"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={mapUrl}
        />
      </div>
    </div>
  );
};

export default RestaurantMap;