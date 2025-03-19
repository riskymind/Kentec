import sql from "better-sqlite3"
import slugify from "slugify"
import fs from "node:fs"
import cloudinary from "@/app/libs/cloudinary";


const db = sql("stamp.db")

export async function getStamps() {
    await new Promise((resolve)=> setTimeout(resolve, 2000))
    return db.prepare("SELECT * FROM stamps ORDER BY id DESC").all();
}

export async function getStamp(slug) {
    await new Promise((resolve)=> setTimeout(resolve, 2000))
    return db.prepare("SELECT * FROM stamps WHERE slug = ?").get(slug)
}

// export async function saveStamp(stamp) {
//     stamp.slug = slugify(stamp.title, {lower: true})

//     const extension = stamp.image.name.split('.').pop()
//     const filename = `${stamp.slug}.${extension}`

//     const stream = fs.createWriteStream(`public/images/${filename}`)
//     const bufferedImage = await stamp.image.arrayBuffer()

//     stream.write(Buffer.from(bufferedImage), (error)=> {
//         if(error) {
//             throw new Error("Save image failed")
//         }
//     })

//     stamp.image = `/images/${filename}`

//     db.prepare(
//         `INSERT INTO stamps 
//         (title, description, image, slug)
//         VALUES (
//         @title,
//         @description,
//         @image,
//         @slug
//         )
//         `
//     ).run(stamp)
// }


export async function saveStamp(stamp) {
    stamp.slug = slugify(stamp.title, { lower: true });
  
    // Convert the file to a Buffer
    const bufferedImage = await stamp.image.arrayBuffer();
    const imageBuffer = Buffer.from(bufferedImage);
  
    // Upload the image to Cloudinary
    const uploadResponse = await cloudinary.uploader.upload_stream(
      {
        folder: "stamps", // Saves in "stamps/" folder on Cloudinary
        public_id: stamp.slug, // Custom filename based on slug
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          throw new Error("Image upload failed");
        }
        return result;
      }
    );
  
    // Convert buffer to a readable stream for upload
    const stream = fs.createReadStream(imageBuffer);
    stream.pipe(uploadResponse);
  
    // Save Cloudinary image URL in SQLite
    stamp.image = uploadResponse.secure_url;
  
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
    ).run(stamp);
}