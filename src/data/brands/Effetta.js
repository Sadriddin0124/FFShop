import Effetta1 from "../../assets/effetta/effetta1.png"
import Effetta2 from "../../assets/effetta/effetta2.png"
import Effetta3 from "../../assets/effetta/effetta3.png"
import Effetta4 from "../../assets/effetta/effetta4.png"
import Effetta5 from "../../assets/effetta/effetta5.png"

export const EffettaData = (t) => {
    return [
        {img: Effetta1, title: t("effetta.title1"), desc: t("effetta.desc1")},
        {img: Effetta2, title: t("effetta.title2"), desc: t("effetta.desc2")},
        {img: Effetta3, title: t("effetta.title3"), desc: t("effetta.desc3")},
        {img: Effetta4, title: t("effetta.title4"), desc: t("effetta.desc4")},
        {img: Effetta5, title: t("effetta.title5"), desc: t("effetta.desc5")},
    ]
}