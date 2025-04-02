"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import deleteStamp from "../actions/deleteStamp"

const ProfileStamps = ({ stamps: initialStamps}) => {
    const [stamps, setStamps] = useState(initialStamps)

    const handleDeleteStamp = async (stampId) => {
        const confirm = window.confirm("Are you sure, you want to delete this stamp?")

        if(!confirm) return

        const deleteStampById = deleteStamp.bind(null, stampId)
        await deleteStampById()

        const updatedStamps = stamps.filter((stamp)=> stamp._id !== stampId)
        setStamps(updatedStamps)
    }

    return stamps.map((stamp)=> (
        <div key={stamp._id} className="mb-10">
            <Link href={`/stamp/${stamp._id}`}>
                <Image 
                className="w-full rounded-md object-cover"
                src={stamp.image[0]}
                alt=""
                width={500}
                height={500}
                priority={true}/>
            </Link>
            <div className="mt-2">
                <p className="text-lg font-semibold text-gray-300">{stamp.title}</p>
                <p className="text-gray-300">Description: {stamp.description}</p>
            </div>
            <div className="mt-2">
                <Link href={`/stamp/${stamp._id}/edit`} className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600">
                    Edit
                </Link>
                <button
                onClick={()=> handleDeleteStamp(stamp._id)}
                 className="bg-red-500 text-white px-3 py-3 rounded-md hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    ))
}

export default ProfileStamps