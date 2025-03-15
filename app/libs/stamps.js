import sql from "better-sqlite3"

const db = sql("stamp.db")

export async function getStamps() {
    await new Promise((resolve)=> setTimeout(resolve, 2000))
    return db.prepare("SELECT * FROM stamps").all()
}

export async function getStamp(slug) {
    await new Promise((resolve)=> setTimeout(resolve, 2000))
    return db.prepare("SELECT * FROM stamps WHERE slug = ?").get(slug)
}