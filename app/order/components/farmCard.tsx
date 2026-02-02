import styles from './farmCard.module.css';
import { Farm } from '../data/farms';

interface FarmCardProps {
  farm: Farm;
}

export default function farmCard({ farm }: FarmCardProps) {
  return (
    <div className={styles.farmCard}>
      <div className={styles.cardImage}>
        <img src={farm.image} alt={farm.name} />
        {farm.badge && <span className={styles.badge}>{farm.badge}</span>}
        <button className={styles.favorite}>♡</button>
      </div>
      <div className={styles.cardContent}>
        <h3>{farm.name}</h3>
        <div className={styles.cardMeta}>
          <span className={styles.rating}>⭐ {farm.rating}</span>
          <span>{farm.reviews}</span>
        </div>
        <div className={styles.cardInfo}>
          <span>{farm.time}</span>
          <span>•</span>
          <span>{farm.badge || farm.category}</span>
        </div>
        <div className={styles.cardFooter}>
          <span>₱{farm.deliveryFee} or</span>
          {farm.promo && <span className={styles.promo}>{farm.promo}</span>}
        </div>
      </div>
    </div>
  );
}