import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import styles from "./GroupComponent1.module.css";

export type GroupComponent1Type = {
  className?: string;
  onClose?: () => void;
};

const GroupComponent1: FunctionComponent<GroupComponent1Type> = ({
  className = "",
  onClose,
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.topRight}>
        <div className={styles.trends}>
          <img
            className={styles.trendingTopic1Icon}
            loading="lazy"
            alt=""
            src="/trendingtopic-1@2x.png"
          />
          <div className={styles.user}>
            <img
              className={styles.uifryIcon}
              loading="lazy"
              alt=""
              src="/uifry.svg"
            />
            <div className={styles.tmWrapper}>
              <div className={styles.tm}>TM</div>
            </div>
          </div>
        </div>
        <div className={styles.charts}>
          <div className={styles.chartHeader}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <img className={styles.element3Icon} alt="" src="/element3.svg" />
              <div className={styles.dashboard}>Dashboard</div>
            </div>
            <div className={styles.chartType}>
              <div className={styles.chartSettings}>
                <div className={styles.security}>
                  <img
                    className={styles.barLineChartIcon}
                    loading="lazy"
                    alt=""
                    src="/barlinechart.svg"
                  />
                </div>
                <a className={styles.analytics}>Analytics</a>
              </div>
            </div>
            <div className={styles.chartHeaderInner}>
              <div className={styles.wallet02Parent}>
                <img
                  className={styles.wallet02Icon}
                  loading="lazy"
                  alt=""
                  src="/wallet02.svg"
                />
                <div className={styles.myWalletWrapper}>
                  <div className={styles.myWallet}>My Wallet</div>
                </div>
              </div>
            </div>
            <div className={styles.chartHeaderChild}>
              <div className={styles.user03Parent}>
                <img
                  className={styles.user03Icon}
                  loading="lazy"
                  alt=""
                  src="/user03.svg"
                />
                <div className={styles.accounts}>Accounts</div>
              </div>
            </div>
            <div className={styles.chartType1}>
              <div className={styles.frameParent}>
                <div className={styles.settings01Wrapper}>
                  <img
                    className={styles.settings01Icon}
                    loading="lazy"
                    alt=""
                    src="/settings01.svg"
                  />
                </div>
                <div className={styles.settings}>Settings</div>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.chartType2}>
              <div className={styles.frameGroup}>
                <div className={styles.shieldTickWrapper}>
                  <img
                    className={styles.shieldTickIcon}
                    alt=""
                    src="/shieldtick.svg"
                  />
                </div>
                <h2 className={styles.security1}>Security</h2>
              </div>
            </div>
            <div className={styles.chartHeaderInner1}>
              <div className={styles.helpIconContainerParent}>
                <div className={styles.helpIconContainer}>
                  <img
                    className={styles.helpCircleIcon}
                    loading="lazy"
                    alt=""
                    src="/helpcircle.svg"
                  />
                </div>
                <h2 className={styles.helpCentre}>Help Centre</h2>
              </div>
            </div>
            <div className={styles.moon01Parent}>
              <img
                className={styles.moon01Icon}
                loading="lazy"
                alt=""
                src="/moon01.svg"
              />
              <div className={styles.darkModeWrapper}>
                <h2 className={styles.darkMode}>Dark Mode</h2>
              </div>
              <div className={styles.modeToggleWrapper}>
                <div className={styles.modeToggle}>
                  <div className={styles.modeToggleChild} />
                  <div className={styles.modeToggleItem} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Form.Select className={styles.profileFormselect} />
    </div>
  );
};

export default GroupComponent1;
