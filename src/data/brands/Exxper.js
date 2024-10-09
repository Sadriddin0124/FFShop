import Exxper1 from "../../assets/Exxper/exxper1.png"
import Exxper2 from "../../assets/Exxper/exxper2.png"
import Exxper3 from "../../assets/Exxper/exxper3.png"
import Exxper4 from "../../assets/Exxper/exxper4.png"

export const ExxperData = (t) => {
    return [
        {img: Exxper1, title: t("exxper.title1"), desc: t("exxper.desc1")},
        {img: Exxper2, title: t("exxper.title2"), desc: t("exxper.desc2")},
        {img: Exxper3, title: t("exxper.title3"), desc: t("exxper.desc3")},
        {img: Exxper4, title: t("exxper.title4"), desc: t("exxper.desc4")},
    ]
}