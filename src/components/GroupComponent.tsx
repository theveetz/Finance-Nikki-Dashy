import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
  arrow14?: string;
  totalIncome?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  arrow14,
  totalIncome,
  propFlex,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src={arrow14}
          />
        </div>
      </div>
      <div className={styles.incomeOutcome}>
        <div className={styles.totalIncome}>{totalIncome}</div>
        <div className={styles.separator}>
          <div className={styles.firstDot}>$632.000</div>
          <div className={styles.separatorInner}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <div className={styles.secondDot}>+1.29%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
