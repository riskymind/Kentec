import Link from "next/link";
import ImageSlideShow from "./components/image_slideshow";
import { motion } from "framer-motion";
import HomeBtns from '@/app/components/home_btns'


export default function Home() {
  return (
    <>
      <header className="flex w-full justify-center mt-16 flex-wrap md:gap-8 gap-4">
        <div className="h-[25rem]">
          <ImageSlideShow />
        </div>

        <div className="flex flex-col md:justify-center">
          <div className="text-center flex flex-col gap-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
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
          <HomeBtns />
        </div>
      </header>
      <main className="">
        <section className="max-w-3/4 mx-auto text-center flex flex-col gap-4">
          <h2 className="text-center text-2xl md:text-5xl font-bold py-6">
            How we work
          </h2>
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
          <h2 className="text-center text-2xl md:text-5xl font-bold py-6">
            Why Kentec Stamps
          </h2>
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
