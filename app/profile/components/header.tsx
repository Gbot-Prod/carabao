import styles from './header.module.css';

export default function ProfileHeader() {
  return (
    <header className={styles.profileHeader}>
      <h1 className={styles.websiteName}>Carabao</h1>
      <h1 className={styles.backArrow}>←</h1>
    </header>
  );
}