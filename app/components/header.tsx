import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="mt-[50px]">
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 flex items-center justify-center">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:gap-8">
            {/* Left Side - Image */}
            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
              <Image
                src="/icons/atom.png" // Replace with your image path
                alt="Edulime"
                width={600}
                height={600}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Right Side - Text */}
            <div className="lg:w-1/2 w-full text-center lg:text-right">
              <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                ادرس بذكاء مع
              </h1>
              <h1 className="bg-gradient-to-r mt-2 from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
                EDULIME
              </h1>

              <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed lg:mx-0">
                منصة تعليمية شاملة مخصصة لمنهج الكويت للمرحلة الثانوية
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                <Link
                  className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                  href="/sign-in"
                >
                  ابدأ الان
                </Link>

                <a
                  className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                  href="#"
                >
                  تعلم اكثر
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
