import React from 'react';
import styles from './RestaurantCard.module.css';

const RestaurantCard = ({ restaurant }) => {
  const { name, rating, address, phone, description, hours } = restaurant;

  return (
    <div className={styles.card}>
      <div className={styles.rating}>{rating} ⭐</div>
      <div className={styles.name}>{name}</div>
      <div className={styles.info}>
        📍 {address}<br />
        📞 {phone}
      </div>
      <div className={styles.description}>{description}</div>
      <div className={styles.hours}>🕒 {hours}</div>
    </div>
  );
};

export default RestaurantCard;