import Shampoo from "../../assets/Amfiora/shampoo.png"
import FaceMask from "../../assets/Amfiora/face_mask.png"
import DeplCream from "../../assets/Amfiora/depl_cream.png"
import FaceCream from "../../assets/Amfiora/face_cream.png"
import HandCream from "../../assets/Amfiora/hand_cream.png"
import FaceScrub from "../../assets/Amfiora/face_scrub.png"
import FootCream from "../../assets/Amfiora/foot_cream.png"
import HairBalm from "../../assets/Amfiora/hair_balm.png"
export const AmfioraData = (t) => {
    return [
        {
            title: t("amfiora.title1"),
            desc: t("amfiora.desc1"),
            img: Shampoo
        },
        {
            title: t("amfiora.title2"),
            desc: t("amfiora.desc2"),
            img: FaceMask
        },
        {
            title: t("amfiora.title3"),
            desc: t("amfiora.desc3"),
            img: FaceScrub
        },
        {
            title: t("amfiora.title4"),
            desc: t("amfiora.desc4"),
            img: DeplCream
        },
        {
            title: t("amfiora.title5"),
            desc: t("amfiora.desc5"),
            img: FaceCream
        },
        {
            title: t("amfiora.title6"),
            desc: t("amfiora.desc6"),
            img: HandCream
        },
        {
            title: t("amfiora.title7"),
            desc: t("amfiora.desc7"),
            img: FootCream
        },
        {
            title: t("amfiora.title8"),
            desc: t("amfiora.desc8"),
            img: HairBalm
        },
    ]
}