import styles from "./Result.module.css";


export function Result({data, maxValue, exclamation}) {
    const score = Math.round(data.reduce((total, item) => total + item.score, 0) / data.length);
    const colors = [{bg: "#FEF6F4", text: "#CA7174"}, {bg: "#FEFBF2", text: "#DBBA6B"}, {bg: "#F2FBFA", text: "#3AB291"}, {bg: "#F3F3FD", text: "#4149A7"}]
    return (
        <div className={styles.Result}>
            <div className={styles.topSection}>

                <p className={styles.startMsg}>Your Result</p>
                <div className={styles.scoreLargeDisplay}>
                    <span className={styles.largeScore}>{score}</span>
                    of {maxValue}
                </div>
               
                <p className={styles.message}>
                    <span className={styles.msgExcamation}>{exclamation}</span>
                    You scored higher than 65% of the people who have taken these tests.
                </p>
            </div>
            <div className={styles.bottomSection}>
                <p className={styles.summary}>Summary</p>
                <ul>
                {
                    data.map((item, i) => <ResultItem key={i} icon={item.icon} colors={colors[i]} name={item.category} value={item.score} maxValue={maxValue} />)
                }
                </ul>
                <button className={styles.continueButton} >Continue</button>
            </div>
        </div>
    )
}


function ResultItem({colors, icon, name, value, maxValue}) {


    return (
        <li className={styles.ResultItem} style={{backgroundColor: colors.bg, color: colors.text}}>
            <div className={styles.titleSection}>
                <img src={icon} alt="icon"/>
                <span>{name}</span>
            </div>
            <div className={styles.scoreSection}><span className={styles.score}>{value}</span> / {maxValue}</div>
        </li>
    )
}