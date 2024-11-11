import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
  <div className="mx-auto max-w-5xl px-4 py-5 sm:px-6 lg:px-8">
    <div className="flex justify-center text-teal-300">
    <Image alt="logo" src={"/logo.png"} width={200} height={100}/>
    </div>

    <p className="mx-auto max-w-md text-center leading-relaxed text-gray-400">
        © مدرسة النجاة - الثانوية - بنين - حولي
    </p>
  </div>
</footer>

  );
}
