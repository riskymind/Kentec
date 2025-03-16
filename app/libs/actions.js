"use server";

import { redirect } from "next/navigation"
import {saveStamp} from './stamps'

export async function createStamp(formData) {
  const stamp = {
    title: formData.get("title"),
    description: formData.get("description"),
    image: formData.get("image"),
  };
  await saveStamp(stamp)
  redirect("/stamp")
}
