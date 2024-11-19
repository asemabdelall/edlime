import Image from "next/image";

export default function Middle() {
  return (
    <section className="bg-gray-900 text-white">
    <div className="mx-auto max-w-screen-xl">
      <br />
      <div className="grid grid-cols-2 p-5 gap-4 md:grid-cols-4">
          <div className="e-card playing relative w-[100%] h-[300px] m-auto mt-[30px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
              
              {/* Wave divs with animations */}
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
  
              {/* Centered Image and Text */}
              <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                <Image src="/icons/books.png" width={150} height={150} alt="Books icon" />
                <p className="mt-4">كتب و مذكرات</p>
              </div>
            </div>
          <div className="e-card playing relative w-[100%] h-[300px] m-auto mt-[30px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
              
              {/* Wave divs with animations */}
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
  
              {/* Centered Image and Text */}
              <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                <Image src="/icons/file.png" width={150} height={150} alt="Books icon" />
                <p className="mt-4">اختبارات الكترونية</p>
              </div>
            </div>
          <div className="e-card playing relative w-[100%] h-[300px] m-auto mt-[30px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
              
              {/* Wave divs with animations */}
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
  
              {/* Centered Image and Text */}
              <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                <Image src="/icons/videos.png" width={150} height={150} alt="Books icon" />
                <p className="mt-4">فيديوهات تعليمية</p>
              </div>
            </div>
          <div className="e-card playing relative w-[100%] h-[300px] m-auto mt-[30px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
              
              {/* Wave divs with animations */}
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
              <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
  
              {/* Centered Image and Text */}
              <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                <Image src="/icons/teacher.png" width={150} height={150} alt="Books icon" />
                <p className="mt-4">دعم الذكاء الاصطناعي</p>
              </div>
            </div>
      </div>
    </div>
  </section>
  );
}
