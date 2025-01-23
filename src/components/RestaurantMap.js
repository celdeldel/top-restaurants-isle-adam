import React, { useEffect, useState } from 'react';
import styles from './RestaurantMap.module.css';

const RestaurantMap = () => {
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_KEY;

  useEffect(() => {
    if (!apiKey) {
      setError('Clé API Google Maps manquante');
      console.error('Clé API non trouvée dans les variables d\'environnement');
    }
  }, [apiKey]);

  // Centre de L'Isle-Adam
  const center = '49.1124,2.2150';

  // Si pas de clé API, afficher un message d'erreur
  if (!apiKey) {
    return (
      <div className={styles.mapContainer}>
        <div className={styles.errorMessage}>
          Configuration de la carte en cours...
          <br />
          {error && <span className={styles.error}>{error}</span>}
        </div>
      </div>
    );
  }

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
          src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=L'Isle-Adam,France&zoom=15`}
        />
      </div>
    </div>
  );
};

export default RestaurantMap;