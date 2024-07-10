import { FunctionComponent } from "react";
import GroupComponent1 from "../components/GroupComponent1";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <GroupComponent1 />
      <main className={styles.welcome}>
        <section className={styles.welcomeMessage}>
          <FrameComponent />
          <div className={styles.finance}>
            <div className={styles.financeDetails}>
              <div className={styles.financeHeader}>
                <GroupComponent
                  arrow14="/arrow-14.svg"
                  totalIncome="Total Income"
                />
                <GroupComponent
                  arrow14="/arrow-15.svg"
                  totalIncome="Total Outcome"
                  propFlex="0.978"
                />
              </div>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameItem} />
                <div className={styles.analyticsHeader}>
                  <div className={styles.analyticsTitle}>
                    <h1 className={styles.analytics}>Analytics</h1>
                    <div className={styles.analyticsChart}>
                      <div className={styles.chartLegend}>
                        <div className={styles.legendItem}>
                          <div className={styles.legendIcon}>
                            <img
                              className={styles.legendIconChild}
                              loading="lazy"
                              alt=""
                              src="/ellipse-2.svg"
                            />
                          </div>
                          <a className={styles.income}>Income</a>
                        </div>
                        <div className={styles.legendItem1}>
                          <div className={styles.legendItemInner}>
                            <img
                              className={styles.frameInner}
                              loading="lazy"
                              alt=""
                              src="/ellipse-3.svg"
                            />
                          </div>
                          <div className={styles.outcome}>Outcome</div>
                        </div>
                        <div className={styles.totalAmountWrapper}>
                          <div className={styles.totalAmount}>
                            <div className={styles.totalAmountChild} />
                            <div className={styles.amountValue}>2020</div>
                            <div className={styles.amountIconWrapper}>
                              <img
                                className={styles.amountIcon}
                                alt=""
                                src="/amount-icon.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.thousand}>
                    <div className={styles.k}>50K</div>
                    <div className={styles.thousandInner}>
                      <div className={styles.lineDiv} />
                    </div>
                  </div>
                </div>
                <div className={styles.chartArea}>
                  <div className={styles.chartBackground}>
                    <div className={styles.chartGrid}>
                      <div className={styles.chartLabels}>
                        <div className={styles.k1}>40K</div>
                        <div className={styles.k2}>30K</div>
                        <div className={styles.k3}>20K</div>
                        <div className={styles.k4}>10K</div>
                      </div>
                      <div className={styles.horizontalGrid}>
                        <div className={styles.lineParent}>
                          <div className={styles.frameChild1} />
                          <div className={styles.graphArea}>
                            <div className={styles.graphBackground} />
                            <div className={styles.bars}>
                              <div className={styles.barsChild} />
                              <div className={styles.dataBars} />
                              <div className={styles.dataBars1} />
                              <div className={styles.dataBars2} />
                              <div className={styles.dataBars3} />
                              <div className={styles.dataBars4} />
                              <div className={styles.dataBars5} />
                              <div className={styles.dataBars6} />
                              <div className={styles.dataBars7} />
                              <div className={styles.dataBars8} />
                              <div className={styles.dataBars9} />
                              <div className={styles.dataBars10} />
                              <div className={styles.dataBars11} />
                              <div className={styles.dataBars12} />
                              <div className={styles.dataBars13} />
                              <div className={styles.dataBars14} />
                              <div className={styles.julyLabel}>
                                <div className={styles.julyLabelChild} />
                                <div className={styles.monthLabel}>
                                  <div className={styles.monthLabelChild} />
                                  <div
                                    className={styles.july2020564569Container}
                                  >
                                    <p className={styles.july2020}>July 2020</p>
                                    <p className={styles.p}>$56.456.9</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.months}>
                    <div className={styles.shortMonths}>
                      <div className={styles.jan}>Jan</div>
                    </div>
                    <div className={styles.shortMonths1}>
                      <div className={styles.feb}>Feb</div>
                    </div>
                    <div className={styles.mar}>Mar</div>
                    <div className={styles.api}>Api</div>
                    <div className={styles.may}>May</div>
                    <div className={styles.shortMonths2}>
                      <div className={styles.jun}>Jun</div>
                    </div>
                    <div className={styles.shortMonths3}>
                      <div className={styles.jul}>Jul</div>
                    </div>
                    <div className={styles.aug}>Aug</div>
                  </div>
                </div>
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.rectangleDiv} />
                <div className={styles.transactionHeader}>
                  <div className={styles.transaction}>Transaction</div>
                  <div className={styles.searchFilter}>
                    <div className={styles.searchBar}>
                      <div className={styles.searchInput}>
                        <div className={styles.searchForAnything}>
                          Search for anything....
                        </div>
                        <div className={styles.searchIcon}>
                          <div className={styles.searchBackground} />
                          <img
                            className={styles.searchIcon1}
                            alt=""
                            src="/search@2x.png"
                          />
                        </div>
                      </div>
                      <div className={styles.dateFilter}>
                        <div className={styles.dateFilterChild} />
                        <div className={styles.calendarPicker}>
                          <img
                            className={styles.calendarIcon}
                            alt=""
                            src="/calendar@2x.png"
                          />
                        </div>
                        <div className={styles.dateLabel}>
                          <div className={styles.may20}>10 May - 20 May</div>
                        </div>
                        <div className={styles.dropdown}>
                          <img
                            className={styles.dropdownChild}
                            alt=""
                            src="/vector-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.transactionList}>
                  <div className={styles.transactionItem}>
                    <div className={styles.transactionDetails}>
                      <div className={styles.nameHeader}>
                        <div className={styles.name}>Name</div>
                      </div>
                      <div className={styles.transactionSummary}>
                        <div className={styles.icons}>
                          <div className={styles.vendorIcons} />
                          <img
                            className={styles.adobeAfterEffects}
                            loading="lazy"
                            alt=""
                            src="/adobe-after-effects@2x.png"
                          />
                        </div>
                        <div className={styles.fullVendorNames}>
                          <div
                            className={styles.adobeAfterEffect}
                          >{`Adobe After Effect `}</div>
                        </div>
                      </div>
                      <div className={styles.transactionSummary1}>
                        <div className={styles.ellipseParent}>
                          <div className={styles.ellipseDiv} />
                          <img
                            className={styles.mcdonaldsIcon}
                            loading="lazy"
                            alt=""
                            src="/mcdonalds@2x.png"
                          />
                        </div>
                        <div className={styles.mcdonaldsWrapper}>
                          <div className={styles.mcdonalds}>Mcdonald’s</div>
                        </div>
                      </div>
                      <div className={styles.transactionSummary2}>
                        <div className={styles.ellipseGroup}>
                          <div className={styles.frameChild2} />
                          <img
                            className={styles.image4Icon}
                            loading="lazy"
                            alt=""
                            src="/image-4@2x.png"
                          />
                        </div>
                        <div className={styles.levisWrapper}>
                          <div className={styles.levis}>Levi’s</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.dateDetails}>
                      <div className={styles.dateHeader}>
                        <div className={styles.date}>Date</div>
                        <div className={styles.transactionDate}>
                          <div className={styles.sat20Apr2020}>
                            Sat,20 Apr 2020
                          </div>
                          <div className={styles.longDates}>
                            <div className={styles.fri19Apr2020}>
                              Fri,19 Apr 2020
                            </div>
                            <div className={styles.tue19Apr2020}>
                              tue,19 Apr 2020
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.amountDetails}>
                        <div className={styles.amountHeader}>
                          <div className={styles.amount}>Amount</div>
                          <div className={styles.transactionAmount}>
                            <div className={styles.amountValue1}>
                              <div className={styles.amountValueWrapper}>
                                <div className={styles.amountValue2}>
                                  $80.09
                                </div>
                              </div>
                              <div className={styles.amountPlaceholder}>
                                $7.03
                              </div>
                              <div className={styles.amountPlaceholder1}>
                                $30.09
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.statusDetails}>
                      <div className={styles.statusHeader}>
                        <div className={styles.status}>Status</div>
                        <div className={styles.transactionStatus}>
                          <div className={styles.statusLabels}>
                            <div className={styles.statusLabelsChild} />
                            <div className={styles.deposited}>Deposited</div>
                          </div>
                          <div className={styles.statusLabels1}>
                            <div className={styles.statusLabelsItem} />
                            <div className={styles.deposited1}>Deposited</div>
                          </div>
                          <div className={styles.statusLabels2}>
                            <div className={styles.statusLabelsInner} />
                            <div className={styles.deposited2}>Deposited</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameChild3} />
                <h1 className={styles.myCard}>My Card</h1>
                <div className={styles.balanceDetails}>
                  <div className={styles.cardBalance}>Card Balance</div>
                  <div className={styles.balanceValue}>$15,595.015</div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.card1}>
                    <div className={styles.card1bg} />
                    <img
                      className={styles.card1Mask}
                      alt=""
                      src="/card-1-mask.svg"
                    />
                    <div className={styles.balanceContainerParent}>
                      <div className={styles.balanceContainer}>
                        <div className={styles.balanceLabel}>
                          <div className={styles.currentBalance}>
                            Current Balance
                          </div>
                          <div className={styles.balanceAmount}>$5,750,20</div>
                        </div>
                      </div>
                      <img
                        className={styles.mastercardLogoIcon}
                        loading="lazy"
                        alt=""
                        src="/mastercard-logo.svg"
                      />
                    </div>
                    <div className={styles.cardNumber}>
                      <div className={styles.cardNumberPlaceholder}>
                        5282 3456 7890 1289
                      </div>
                      <div className={styles.cardNumberPlaceholder1}>09/25</div>
                    </div>
                  </div>
                </div>
                <div className={styles.cardActions}>
                  <div className={styles.manageTransfer}>
                    <div className={styles.manageButton}>
                      <div className={styles.manageBackground} />
                      <div className={styles.manageIcon} />
                    </div>
                    <div className={styles.transferButton} />
                  </div>
                </div>
                <div className={styles.cardOptions}>
                  <div className={styles.cardButtons}>
                    <button className={styles.buttonLabels}>
                      <div className={styles.buttonLabelsChild} />
                      <div className={styles.manageCards}>Manage Cards</div>
                    </button>
                    <button className={styles.buttonLabels1}>
                      <div className={styles.buttonLabelsItem} />
                      <div className={styles.transfer}>Transfer</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper}>
                <div className={styles.groupDiv}>
                  <div className={styles.frameChild4} />
                  <div className={styles.activityHeader}>
                    <h1 className={styles.activity}>Activity</h1>
                    <div className={styles.activityFilter}>
                      <div className={styles.monthFilter}>
                        <div className={styles.monthFilterChild} />
                        <div className={styles.month}>Month</div>
                        <div className={styles.monthDropdown}>
                          <img
                            className={styles.monthDropdownChild}
                            alt=""
                            src="/vector-5.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.activityList}>
                    <div className={styles.activityItem}>
                      <div className={styles.activityContent}>
                        <div className={styles.activityDetails}>
                          <div className={styles.paymentInfo}>
                            <div className={styles.paymentDescription}>
                              <div className={styles.dailyPayment}>
                                Daily payment
                              </div>
                              <div className={styles.paymentCategory}>
                                <div className={styles.hobby}>Hobby</div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.separator}>
                            <div className={styles.div}>55%</div>
                            <div className={styles.div1}>20%</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.activityChart}>
                        <div className={styles.chartDots}>
                          <div className={styles.chartSubDots}>
                            <div className={styles.chartSubDotsChild} />
                            <div className={styles.chartPoint}>
                              <div className={styles.chartCircle} />
                              <b className={styles.chartValue}>75%</b>
                            </div>
                            <div className={styles.chartSubDotsItem} />
                          </div>
                          <div className={styles.chartDotsChild} />
                          <div className={styles.chartDotsItem} />
                        </div>
                        <button className={styles.viewAll}>
                          <div className={styles.viewAllActivity}>
                            View all activity
                          </div>
                          <div className={styles.viewAllInner}>
                            <img
                              className={styles.arrowIcon}
                              alt=""
                              src="/arrow-5.svg"
                            />
                          </div>
                          <div className={styles.viewAllChild} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Desktop;
