import styles from "./page.module.css";

// デジタル/Webマーケティングを表現するSVG
const DigitalSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.businessIcon}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

// 建築を表現するSVG
const ArchitectSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={styles.businessIcon}>
    <path d="m2 22 1-1h3l9-9" />
    <path d="M11.5 7.5 15 11" />
    <path d="M22 2c-1.8 0-3.4 1.3-3.8 3L13.5 10.5" />
    <path d="M8 18h1.5v1.5" />
    <path d="M20 8.5V11a9 9 0 0 1-9 9" />
  </svg>
);

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span>Logical × Creative</span>
          </div>
          <h1 className={styles.heroTitle}>
            論理で繋ぎ、
            <br />
            空間を築く。
          </h1>
          <p className={styles.heroDescription}>
            IMAMURA STOREは、「Webマーケティング」によるデジタル構築と、「建築」による物理空間構築の2つのプロフェッショナル領域を軸に、人々と社会に最適なインフラを提供します。
          </p>
          <div className={styles.heroActions}>
            <a href="#marketing" className={`${styles.primaryBtn} tappable`}>
              事業紹介を見る
            </a>
          </div>
        </div>
      </section>

      {/* スプリット・事業内容セクション */}
      <section className={styles.businessSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>OUR BUSINESS</h2>
          
          {/* モバイルではスワイプ可能、PCでは2カラムになるスナップコンテナ */}
          <div className={styles.businessScrollContainer}>
            
            {/* Webマーケティング */}
            <div id="marketing" className={`${styles.businessCard} ${styles.marketingCard}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconContainer} ${styles.marketingIconBg}`}>
                  <DigitalSVG />
                </div>
                <span className={styles.businessTag}>Web Marketing</span>
              </div>
              <h3 className={styles.cardTitle}>Webマーケティング事業</h3>
              <p className={styles.cardDesc}>
                データ分析と市場調査に基づき、認知拡大からコンバージョン向上まで一貫したデジタル戦略を設計します。
              </p>
              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.bullet}>✓</span>
                  <div>
                    <strong>SEO & コンテンツ戦略</strong>
                    <p>検索エンジンの最適化と質の高いコンテンツで持続的な流入を獲得します。</p>
                  </div>
                </li>
                <li>
                  <span className={styles.bullet}>✓</span>
                  <div>
                    <strong>インターネット広告運用</strong>
                    <p>効果測定を徹底し、最小限のコストで最大の広告効果を引き出します。</p>
                  </div>
                </li>
                <li>
                  <span className={styles.bullet}>✓</span>
                  <div>
                    <strong>LPO・UI/UX改善</strong>
                    <p>ユーザー行動データを解析し、成約率を最大化する導線設計を行います。</p>
                  </div>
                </li>
              </ul>
              <a href="/contact" className={`${styles.cardBtn} ${styles.marketingBtn} tappable`}>
                マーケティングについて相談する
              </a>
            </div>

            {/* 建築事業 */}
            <div id="architecture" className={`${styles.businessCard} ${styles.architectureCard}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconContainer} ${styles.architectureIconBg}`}>
                  <ArchitectSVG />
                </div>
                <span className={styles.businessTag}>Architecture</span>
              </div>
              <h3 className={styles.cardTitle}>建築設計・施工事業</h3>
              <p className={styles.cardDesc}>
                人々の営みの土台となる空間を、優れた意匠設計と確かな施工技術でカタチにします。
              </p>
              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.bullet}>✓</span>
                  <div>
                    <strong>意匠・空間デザイン</strong>
                    <p>美しさと機能性を両立させ、そこに住む人・集う人の感性を刺激する空間を設計します。</p>
                  </div>
                </li>
                <li>
                  <span className={styles.bullet}>✓</span>
                  <div>
                    <strong>商業店舗プロデュース</strong>
                    <p>ブランド価値を物理空間に翻訳し、集客力と体験価値の高い店舗をつくりあげます。</p>
                  </div>
                </li>
                <li>
                  <span className={styles.bullet}>✓</span>
                  <div>
                    <strong>注文住宅・リノベーション</strong>
                    <p>ライフスタイルに寄り添い、時間の経過とともに愛着の増す住まいを提供します。</p>
                  </div>
                </li>
              </ul>
              <a href="/contact" className={`${styles.cardBtn} ${styles.architectureBtn} tappable`}>
                建築プロジェクトについて相談する
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* お知らせセクション */}
      <section className={styles.newsSection}>
        <div className={styles.sectionInner}>
          <h2 className={styles.newsTitle}>NEWS</h2>
          <div className={styles.newsList}>
            <div className={`${styles.newsItem} tappable`}>
              <div className={styles.newsMeta}>
                <span className={styles.newsDate}>2026.06.14</span>
                <span className={`${styles.newsTag} ${styles.tagMarketing}`}>Marketing</span>
              </div>
              <h3 className={styles.newsItemTitle}>Webマーケティング個別相談会のご案内</h3>
            </div>
            <div className={`${styles.newsItem} tappable`}>
              <div className={styles.newsMeta}>
                <span className={styles.newsDate}>2026.06.10</span>
                <span className={`${styles.newsTag} ${styles.tagArchitecture}`}>Architecture</span>
              </div>
              <h3 className={styles.newsItemTitle}>新しいモデルハウス「IMAMURA HOUSE」が着工しました</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
