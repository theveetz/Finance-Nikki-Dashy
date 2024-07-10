import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.welcomeContentWrapper, className].join(" ")}>
      <div className={styles.welcomeContent}>
        <div className={styles.welcomeHeader}>
          <div className={styles.welcomeTitle}>
            <div className={styles.titleContent}>
              <h1 className={styles.welcomeBackAli}>Welcome Back, Ali</h1>
              <div className={styles.wavingHand}>
                <img
                  className={styles.wavingHandEmoji}
                  loading="lazy"
                  alt=""
                  src="/waving-hand-emoji@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.heresWhatsHappening}>
            Here’s what’s happening with your store today.
          </div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <div className={styles.searchContent}>
              <div className={styles.searchContentChild} />
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group-1@2x.png"
              />
            </div>
            <div className={styles.searchPlaceholder}>
              <div className={styles.searchForAnything}>
                Search for anything....
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
