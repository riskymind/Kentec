import sql from "better-sqlite3";

const db = sql("stamp.db");

const dummyStamps = [
  {
    title: "Ashlar Slate",
    slug: "ashlar-slate",
    image: "/images/image_1.jpeg",
    description:"Mimics the look of finely cut stone tiles arranged in a square or rectangular pattern.",
  },
  {
    title: "Cobblestone",
    slug: "cobble-stone",
    image: "/images/image_2.jpeg",
    description:
      "Replicates the look of traditional cobblestone streets with rounded, textured stones.",
  }
];

db.prepare(
  `
        CREATE TABLE IF NOT EXISTS stamps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slug TEXT NOT NULL UNIQUE,
            title TEXT NOT NULL,
            image TEXT NOT NULL,
            description TEXT NOT NULL)
    `
).run();


async function initData() {
    const stmt = db.prepare(`
            INSERT INTO stamps VALUES (
                null, 
                @slug,
                @title,
                @image,
                @description
            )
        `)

        for( const stamp of dummyStamps) {
            stmt.run(stamp)
        }
}

initData()