import sql from "better-sqlite3"
import slugify from "slugify"
import fs from "node:fs"
import { error } from "node:console"


const db = sql("stamp.db")

export async function getStamps() {
    await new Promise((resolve)=> setTimeout(resolve, 2000))
    return db.prepare("SELECT * FROM stamps ORDER BY id DESC").all();
}

export async function getStamp(slug) {
    await new Promise((resolve)=> setTimeout(resolve, 2000))
    return db.prepare("SELECT * FROM stamps WHERE slug = ?").get(slug)
}

export async function saveStamp(stamp) {
    stamp.slug = slugify(stamp.title, {lower: true})

    const extension = stamp.image.name.split('.').pop()
    const filename = `${stamp.slug}.${extension}`

    const stream = fs.createWriteStream(`public/images/${filename}`)
    const bufferedImage = await stamp.image.arrayBuffer()

    stream.write(Buffer.from(bufferedImage), (error)=> {
        if(error) {
            throw new Error("Save image failed")
        }
    })

    stamp.image = `/images/${filename}`

    db.prepare(
        `INSERT INTO stamps 
        (title, description, image, slug)
        VALUES (
        @title,
        @description,
        @image,
        @slug
        )
        `
    ).run(stamp)
}