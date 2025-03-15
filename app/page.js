import Link from "next/link";
import ImageSlideShow from "./components/image_slideshow";

export default function Home() {
  return (
    <>
      <header className="flex w-full justify-center mt-16 flex-wrap md:gap-8 gap-4">
        <div className="h-[25rem]">
          <ImageSlideShow />
        </div>

        <div className="flex flex-col md:justify-center">
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-3xl font-bold tracking-wide">
              <span className="italic text-slate-400 font-semibold antialiased">
                Kentec:
              </span>{" "}
              Elevating Surfaces <br />
              with Elegance and Durability
            </h1>
            <p className="font-mono text-gray-400">
              Premium Concrete Stamping Solutions for Stunning, Long-Lasting
              Floors
            </p>
          </div>
          <div className="flex gap-2 w-full justify-center p-4">
            <Link
              href="/stamp/create_stamp"
              className="p-3 border border-gray-700 rounded-md hover:bg-gray-400 transition-all duration-100 ease-in"
            >
              Add Stamp
            </Link>
            <Link
              href="/stamp"
              className="p-3 bg-white text-black border border-gray-700 rounded-md hover:bg-gray-400 transition-all duration-100 ease-in"
            >
              Explore Gallery
            </Link>
          </div>
        </div>
      </header>
      <main className="">
        <section className="max-w-3/4 mx-auto text-center flex flex-col gap-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold py-10">How we work</h2>
          <p className="md:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem
            libero, euismod vel euismod ut, tempor sed orci. Mauris id purus
            ullamcorper.
          </p>
          <p className="md:w-3/4 mx-auto">
            Quisque eu suscipit leo, congue pellentesque libero. Etiam placerat,
            odio eu sodales imperdiet, mi tortor finibus mauris.
          </p>
        </section>

        <section className="max-w-3/4 mx-auto text-center flex flex-col gap-4">
          <h2 className="text-center text-3xl md:text-5xl font-bold py-10">Why Kentec Stamps</h2>
          <p className="md:w-3/4 mx-auto">
            Etiam ut viverra lectus. Integer hendrerit massa tortor, ac pretium
            mi scelerisque nec. Vivamus sed neque urna. Suspendisse quis orci ut
            nibh commodo imperdiet a nec lorem. Nam pretium ullamcorper.
          </p>
          <p className="md:w-3/4 mx-auto">
            Nulla facilisi. Ut luctus tellus et libero rutrum, non lobortis
            lectus tempus. Vestibulum fringilla tincidunt velit.
          </p>
        </section>
      </main>
    </>
  );
}
