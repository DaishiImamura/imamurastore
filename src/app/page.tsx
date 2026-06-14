import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Innovative Design & Technology</span>
          <h1 className={styles.heroTitle}>
            未来の価値を、
            <br />
            ここから創造する。
          </h1>
          <p className={styles.heroDescription}>
            IMAMURA STOREは、先進的な技術と洗練されたデザインを融合させ、
            新しい体験と信頼を提供するコーポレートサイトのサンプルです。
            ヘッダーのガラスモーフィズム効果や、スムーズなアニメーションをお試しください。
          </p>
          <div className={styles.heroCta}>
            <a href="/services" className={styles.primaryButton}>
              事業紹介
            </a>
            <a href="/about" className={styles.secondaryButton}>
              私たちについて
            </a>
          </div>
        </div>
      </section>

      {/* コンテンツセクション (スクロール確認用) */}
      <section className={styles.contentSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>お知らせ</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <span className={styles.cardDate}>2026.06.14</span>
              <h3 className={styles.cardTitle}>Webサイトを開設いたしました</h3>
              <p className={styles.cardText}>
                最新情報やプレスリリースなどをいち早くお届けするため、コーポレートサイトを開設いたしました。今後ともよろしくお願いいたします。
              </p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardDate}>2026.06.01</span>
              <h3 className={styles.cardTitle}>新規パートナーシップの締結</h3>
              <p className={styles.cardText}>
                より質の高いサービス提供を目指し、新たなテクノロジーパートナーとの業務提携に合意しました。詳細につきましては別途資料をご覧ください。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
