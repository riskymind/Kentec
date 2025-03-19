import connectDB from "@/config/database";
import {getStamps} from "../../libs/stamps"
import StampsList from "./stampList"
import Stamp from "@/models/stamp.model";
export const dynamic = "force-dynamic";

export async function Stamps() {
    // const stamps = await getStamps()
    await connectDB()
    const stamps = await Stamp.find({}).lean()
    return <StampsList stamps={stamps}/>
}