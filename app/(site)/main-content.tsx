import Image from "next/image"
import smd from "../images/statematernaldeaths.jpg"
import sbw from "../images/statebirthweight.jpg"
import scs from "../images/statecsection.jpg"
import barMatD from "../images/cFundMatDeathsByRace.jpg"
import barInfD from "../images/cFundInfantMortality.jpg"
import upCS from "../images/unplannedCS.jpg"
import cod from "../images/causesOfDeath.jpg"
import rbw from "../images/RatioBW.jpg"
import fourthTri from "../images/fourthTrimester.jpg"
export default function MainContent() {
    return(
    <div> 
        <p className="first-line:uppercase
            first-letter:text-5xl first-letter:font-bold
            first-letter:mr-3 first-letter:float-left
            ">
            Black Women have a higher chance of sustaining pregnancy related morbidities.
            Among these are hypertension(gestational or not), diabetes(gestational or not), uterine fibroids etc 
            each of these has a compounding effect on top of the already established systemic racism in healthcare. 
            </p>
            <p>The high ratio of black mothers vs white mothers to die has been observed for 100 years</p>
            <div className="flex justify-center">
                <Image
                src={rbw}
                alt="ratio of black to white deaths"
                width={500}
                height={500}
                className="m-5 flex justify-center"
                />
            </div>

            <p>The result of these factors Societal/Racial factors create undue stress, and can exacerbate the other compounding morbidities resulting in pre-term birth. which can have negative outcomes for mother and child</p>

            <p>Medications given to induce the process ahead of the natural timing, which then places a timer/stopwatch on the moms eventual outcome. Hospital beds are always in need so your provider may not be willing to let you labor for 3+ days or rush you towards a cesarean </p>

            <p>Globally Increased Cesarean rate from roughly 9% to 20%, we will see in some tables below that many states have a Cesarean rate north of 35%. Yes far ahead of the already higher than ideal global trend!</p>

            <p> Unplanned cesarean birth is a significant contributor to maternal morbidity and mortality, particularly among otherwise low-risk pregnant individuals. Factors such as nulliparity, fetal size, maternal age, and BMI contribute to the likelihood of unplanned cesarean delivery. However, even after adjusting for clinical factors, self-identification as Black increases the odds of unplanned cesarean delivery. This disparity suggests systemic factors beyond clinical considerations.</p>
            <div className="flex justify-center">
            <Image
              src={upCS}
              alt="unplanned cesareans by race"
              width={500}
              height={500}
              className="m-5 flex justify-center"
            />
            </div>

            <p> It is possible that the stress of laboring in an environment where structural racism and/or race/ethnic discordance with the intrapartum care team may place strain on the maternal/fetal unit such that non-reassuring FHR is more likely</p>

            <p>Cesarian section (CS) is recommended in situations where normal vaginal delivery (VD) can pose risks to either the mother, baby, or both. These situations include prolonged or obstructed labor, fetal distress, elevated blood pressure or glucose etc. 
                currently, not all CS are done for medical reasons with rapidly increasing rate of non‐medically indicated CS and the so‐called “caesarian on maternal request</p>
                <div className="flex justify-center">
                    <Image
                    src={cod}
                    alt="causes of death"
                    width={500}
                    height={500}
                    className="m-5"
                    />  
                </div>
            
            <p>States with worse outcomes for moms also have higher rates of low birth weights, higher rates of cesarean sections and higher rates of maternal deaths  </p>
            <div className="flex justify-center">
            <Image
              src={smd}
              alt="state maternal deaths"
              width={500}
              height={500}
              className="m-5"
            />
            <Image
              src={sbw}
              alt="state birth weight"
              width={500}
              height={500}
              className="m-5"
            />
            <Image
              src={scs}
              alt="state cesarian section"
              width={500}
              height={500}
              className="m-5"
            />
            </div>

            <p>Outcomes are generally worse for black women and black babies in abortion-restricted states and black babies  </p>
            <div className="flex justify-center">
            <Image
              src={barMatD}
              alt="state birth weight"
              width={500}
              height={500}
              className="m-5"
            />
            <Image
              src={barInfD}
              alt="Infant Deaths by race"
              width={500}
              height={500}
              className="m-5"
            />
            </div>


            <p>“It is possible that the stress of laboring in an environment where structural racism and/or race/ethnic discordance with the intrapartum care team may place strain on the maternal/fetal unit such that non-reassuring FHR is more likely”</p>

            <p>Medically required C-sections are needed, voluntary c-sections introduce more risk into the birthing equation. Medications given during make it difficult for mothers to stay informed on what care they are receiving so Moms need to have birth plans and people to advocate for her during and after pregnancy</p>
            <div className="flex justify-center">
            <Image
              src={fourthTri}
              alt="The fourth trimester"
              width={500}
              height={500}
              className="m-5 flex justify-center"
            />
            </div>

    </div>
    )
}