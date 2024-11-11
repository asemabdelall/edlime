import Image from "next/image";

export default function Footer() {
  return (
    <div>
    <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center bg-gray-900">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold md:text-3xl text-white">
            ادرس المرحلة الثانوية و انت مرتاح
          </h2>

          <p className="md:mt-4 text-right md:block text-gray-400">
          Edulime هو موقع إلكتروني تعليمي مخصص لطلاب المرحلة الثانوية في الكويت، يقدم محتوى تعليميًا متوافقًا مع المناهج الدراسية الكويتية. يوفر الموقع شروحات دروس، اختبارات تفاعلية، وأدوات دعم للطلاب والمعلمين بهدف تعزيز العملية التعليمية وتحسين الأداء الأكاديمي. 
          </p>

          <div className="mt-4 md:mt-8">
            <a
              href="#"
              className="inline-block rounded bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              ابدأ اليوم
            </a>
          </div>
        </div>
      </div>

      <img
        alt=""
        src="https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
      />
    </section>
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
    </div>

  );
}
