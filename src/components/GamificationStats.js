import styles from './GamificationStats.module.css';
import { ZapIcon, StarIcon, TrophyIconSimple, TrendingUpIcon } from './Icons';

export default function GamificationStats() {
  return (
    <div className={styles.container}>
      <div className={styles.statItem}>
        <div className={styles.iconWrapper} style={{ color: '#eab308' }}>
            <ZapIcon size={24} fill="currentColor" />
        </div>
        <div className={styles.statInfo}>
            <span className={styles.value}>12</span>
            <span className={styles.label}>Day Streak</span>
        </div>
      </div>
      
      <div className={styles.divider}></div>

      <div className={styles.statItem}>
        <div className={styles.iconWrapper} style={{ color: '#3b82f6' }}>
             <StarIcon size={24} fill="currentColor" />
        </div>
        <div className={styles.statInfo}>
            <span className={styles.value}>2,450</span>
            <span className={styles.label}>Total XP</span>
        </div>
      </div>

       <div className={styles.divider}></div>

      <div className={styles.statItem}>
        <div className={styles.iconWrapper} style={{ color: '#a855f7' }}>
             <TrophyIconSimple size={24} />
        </div>
        <div className={styles.statInfo}>
            <span className={styles.value}>Lvl 5</span>
            <span className={styles.label}>Scholar</span>
        </div>
      </div>

       <div className={styles.divider}></div>

      <div className={styles.statItem}>
        <div className={styles.iconWrapper} style={{ color: '#10b981' }}>
             <TrendingUpIcon size={24} />
        </div>
        <div className={styles.statInfo}>
            <span className={styles.value}>Top 5%</span>
            <span className={styles.label}>Learner</span>
        </div>
      </div>
    </div>
  );
}
