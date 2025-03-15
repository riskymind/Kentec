import Image from "next/image";
import logoImg from "@/public/images/kentec.jpeg"
import Link from "next/link";


export default function AboutUs() {
  return (
    <section className="bg-black/20 rounded-lg shadow-md py-12 mt-16">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-400">About Kentec Global Concepts</h2>
          <p className="text-gray-200 mt-4">
            At Kentec, we specialize in **premium stamped concrete solutions** that combine **beauty and durability**. Our expert team transforms ordinary surfaces into **elegant, long-lasting designs**, perfect for both **residential and commercial projects**.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap md:flex-nowrap items-center">
          <div className="w-full md:w-1/2 p-4">
            <Image
              src={logoImg} 
              alt="Concrete Stamping Work"
              className="animate-pulse rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold text-gray-700">Why Choose Us?</h3>
            <ul className="mt-4 space-y-3 text-gray-600">
              <li>✅ **Expert Craftsmanship & Precision**</li>
              <li>✅ **Durable & Weather-Resistant Designs**</li>
              <li>✅ **Custom Patterns & Unique Finishes**</li>
              <li>✅ **Seamless Installation & Long-lasting Quality**</li>
            </ul>
            <div className="mt-8">
              <Link href="https://wa.me/07046193975?text=Hello%20Kentec" className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

