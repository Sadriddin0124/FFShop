import Barg1 from "../../assets/Barg/barg1.png"
import Barg2 from "../../assets/Barg/barg2.png"

export const BargData = (t) => {
    return [
        {img: Barg1, title: t("barg.title1"), desc: t("barg.desc1")},
        {img: Barg2, title: t("barg.title2"), desc: t("barg.desc2")},
    ]
}