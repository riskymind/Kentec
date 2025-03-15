import sql from "better-sqlite3";

const db = sql("stamp.db");

const dummyStamps = [
  {
    title: "Ashlar Slate",
    slug: "ashlar-slate",
    image: "/images/image_1.jpeg",
    description:"Mimics the look of finely cut stone tiles arranged in a square or rectangular pattern.",
    creator: "John Doe",
    creator_whatsapp: "07046193975",
  },
  {
    title: "Cobblestone",
    slug: "cobble-stone",
    image: "/images/image_2.jpeg",
    description:
      "Replicates the look of traditional cobblestone streets with rounded, textured stones.",
    creator: "Max Schwarz",
    creator_whatsapp: "07046193975",
  },
  {
    title: "Wood Plank",
    slug: "wood-plank",
    image: "/images/image_3.jpeg",
    description:
      "Imitates real wooden planks while providing durability and resistance to rot or termites.",
    creator: "Emily Chen",
    creator_whatsapp: "07046193975",
  },
  {
    title: "Herringbone Brick",
    slug: "herringbone-brick",
    image: "/images/image_8.jpeg",
    description:
      "Creates the appearance of bricks laid in a herringbone pattern, offering a classic design.",
    creator: "Laura Smith",
    creator_whatsapp: "07046193975",
  },
  {
    title: "Random Stone",
    slug: "random-stone",
    image: "/images/image_5.jpeg",
    description:
      "Creates an irregular, natural stone pattern with a mix of different-sized stones, perfect for an organic look",
    creator: "Mario Rossi",
    creator_whatsapp: "07046193975",
  },
  {
    title: "River Rock",
    slug: "river-rock",
    image: "/images/image_6.jpeg",
    description:
      "Mimics the look of natural river stones embedded in concrete, creating a natural and organic feel.",
    creator: "Franz Huber",
    creator_whatsapp: "07046193975",
  },
  {
    title: "Seamless",
    slug: "seam-less",
    image: "/images/image_7.jpeg",
    description:
      "Provides a continuous slate texture without visible joints or patterns, creating a smooth, elegant look.",
    creator: "Sophia Green",
    creator_whatsapp: "07046193975",
  },
];

db.prepare(
  `
        CREATE TABLE IF NOT EXISTS stamps (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            slug TEXT NOT NULL UNIQUE,
            title TEXT NOT NULL,
            image TEXT NOT NULL,
            description TEXT NOT NULL,
            creator TEXT NOT NULL,
            creator_whatsapp TEXT NOT NULL
        )
    `
).run();


async function initData() {
    const stmt = db.prepare(`
            INSERT INTO stamps VALUES (
                null, 
                @slug,
                @title,
                @image,
                @description,
                @creator,
                @creator_whatsapp
            )
        `)

        for( const stamp of dummyStamps) {
            stmt.run(stamp)
        }
}

initData()