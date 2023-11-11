import style from "./ResultSummaryComponentPage.module.css"
import { Result } from "./components";
import data from "./data.json"
import img1 from "./assets/images/icon-reaction.svg"
import img2 from "./assets/images/icon-memory.svg"
import img3 from "./assets/images/icon-verbal.svg"
import img4 from "./assets/images/icon-visual.svg"




function ResultSummaryComponentPage() {
    const msg = "You scored higher than 65% of the people who have taken these tests."
    const maxTotalScore = 100
    const exclamation = "Great"
    const icons = [img1, img2, img3, img4];
    for (let i = 0; i < data.length; i++)
        data[i].icon = icons[i];
    return(
        <main className={style.main}>
            <div className={style.component}><Result exclamation={exclamation} msg={msg} maxValue={maxTotalScore} data={data} /></div>
        </main>  
    )
}

export {ResultSummaryComponentPage};