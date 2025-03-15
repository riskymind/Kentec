import {getStamps} from "../../libs/stamps"
import StampsList from "./stampList"

export async function Stamps() {
    const stamps = await getStamps()
    return <StampsList stamps={stamps}/>
}