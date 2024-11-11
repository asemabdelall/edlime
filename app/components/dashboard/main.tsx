"use client";
import { useUser } from "@clerk/nextjs";
import Footer from "@/app/components/dashboard/dashboardfooter";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Dashboard() {
    const { user } = useUser();
    const [grade, setGrade] = useState('');
    const [showModal, setShowModal] = useState(false);
  
    // Check for grade in localStorage on component mount
    useEffect(() => {
      const storedGrade = localStorage.getItem("userGrade");
      if (!storedGrade) {
        setShowModal(true);
      } else {
        setGrade(storedGrade);
      }
    }, []);
  
    const handleGradeSubmit = (e) => {
      e.preventDefault();
      if (grade) {
        localStorage.setItem("userGrade", grade);
        setShowModal(false);
      }
    };
      return (
    <div className="bg-gray-900 p-5 text-white">
    <h1 className="mt-[70px] text-2xl text-right">مرحبا, {user?.firstName}</h1>
        <section className="bg-gray-900 text-white">
            <div className="mx-auto max-w-screen-xl">
            <br />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="e-card playing relative w-[100%] h-[230px] m-auto mt-[10px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
                    
                    {/* Wave divs with animations */}
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
        
                    {/* Centered Image and Text */}
                    <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                        <Image src="/icons/books.png" width={100} height={100} alt="Books icon" />
                        <p className="mt-4">الرياضيات</p>
                    </div>
                    </div>
                <div className="e-card playing relative w-[100%] h-[230px] m-auto mt-[10px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
                    
                    {/* Wave divs with animations */}
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
        
                    {/* Centered Image and Text */}
                    <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                        <Image src="/icons/file.png" width={100} height={100} alt="Books icon" />
                        <p className="mt-4">اللغة الانجليزية</p>
                    </div>
                    </div>
                <div className="e-card playing relative w-[100%] h-[230px] m-auto mt-[10px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
                    
                    {/* Wave divs with animations */}
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
        
                    {/* Centered Image and Text */}
                    <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                        <Image src="/icons/books.png" width={100} height={100} alt="Books icon" />
                        <p className="mt-4">الكيمياء</p>
                    </div>
                    </div>
                <div className="e-card playing relative w-[100%] h-[230px] m-auto mt-[10px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
                    
                    {/* Wave divs with animations */}
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
        
                    {/* Centered Image and Text */}
                    <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                        <Image src="/icons/file.png" width={100} height={100} alt="Books icon" />
                        <p className="mt-4">الفيزياء</p>
                    </div>
                    </div>
                <div className="e-card playing relative w-[100%] h-[230px] m-auto mt-[10px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
                    
                    {/* Wave divs with animations */}
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
        
                    {/* Centered Image and Text */}
                    <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                        <Image src="/icons/file.png" width={100} height={100} alt="Books icon" />
                        <p className="mt-4">الاحياء</p>
                    </div>
                    </div>
                <div className="e-card playing relative w-[100%] h-[230px] m-auto mt-[10px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
                    
                    {/* Wave divs with animations */}
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
        
                    {/* Centered Image and Text */}
                    <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                        <Image src="/icons/file.png" width={100} height={100} alt="Books icon" />
                        <p className="mt-4">اللغة العربية</p>
                    </div>
                    </div>
                <div className="e-card playing relative w-[100%] h-[230px] m-auto mt-[10px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn">
                    
                    {/* Wave divs with animations */}
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
                    <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>
        
                    {/* Centered Image and Text */}
                    <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                        <Image src="/icons/file.png" width={100} height={100} alt="Books icon" />
                        <p className="mt-4">الحاسوب</p>
                    </div>
                    </div>
            </div>
            </div>
        </section>
        <Footer />
              {/* Grade Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 text-center w-1/3">
            <h2 className="text-xl font-semibold text-gray-900">حدد الصف الدراسي</h2>
            <form onSubmit={handleGradeSubmit} className="mt-4">
              <select
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-900"
              >
                <option value="">اختر الصف</option>
                <option value="10">الصف العاشر</option>
                <option value="11">الصف الحادي عشر</option>
                <option value="12">الصف الثاني عشر</option>
              </select>
              <button
                type="submit"
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md"
              >
                حفظ
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
