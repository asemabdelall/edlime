"use client";
import { useUser } from "@clerk/nextjs";
import Footer from "@/app/components/dashboard/dashboardfooter";
import Image from "next/image";
import { useEffect, useState, FormEvent } from "react";
import { Client, Databases } from "appwrite";
import Link from "next/link";

export default function Dashboard() {
  const { user } = useUser();
  const [grade, setGrade] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);
  const [subjects, setSubjects] = useState<any[]>([]); // Modified state to store all document data

  // Initialize Appwrite client
  const client = new Client();
  const databases = new Databases(client);
  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
    .setProject("673312110017106ece47"); // Replace with your Project ID

  // Fetch subjects from Appwrite on component mount
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const storedGrade = localStorage.getItem("userGrade");
        if (!storedGrade) setShowModal(true);
        else setGrade(storedGrade);

        const response = await databases.listDocuments("67331337000314c16e4a", "673313400022987c4fe6"); // Replace with your database and collection ID
        setSubjects(response.documents); // Store full document data for each subject
      } catch (error) {
        console.error("Failed to fetch subjects:", error);
      }
    };
    fetchSubjects();
  }, []);

  const handleGradeSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (grade) {
      localStorage.setItem("userGrade", grade);
      setShowModal(false);
    }
  };

  return (
    <div className="bg-gray-900 p-5 text-white">
      <h1 className="mt-[70px] text-2xl text-right">مرحبا, {user?.firstName}</h1>
      <h1 className="mt-[10px] text-2xl text-right">الصف {grade}</h1>
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl">
          <br />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {subjects.map((subject, index) => (
            <Link href={`/subject/${subject.$id}`} key={subject.$id}>
              <div
                className="e-card playing relative w-[100%] h-[230px] m-auto mt-[10px] rounded-2xl overflow-hidden shadow-xl bg-transparent animate-fadeIn"
              >
                {/* Wave divs with animations */}
                <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-0 -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveSlow"></div>
                <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveMedium"></div>
                <div className="wave absolute w-[540px] h-[700px] opacity-60 left-0 top-[210px] -ml-[50%] -mt-[70%] bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb] rounded-[40%] animate-waveFast"></div>

                {/* Display subject data */}
                <div className="infotop flex flex-col items-center justify-center text-center text-white font-semibold text-xl absolute inset-0">
                  <Image src={subject.icon} alt="" width={100} height={100} />
                  <p className="mt-4">{subject.subject_name}</p>
                </div>
              </div>
            </Link>
          ))}

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
                <option value="11" disabled>(قريبا) الصف الحادي عشر</option>
                <option value="12" disabled>(قريبا) الصف الثاني عشر</option>
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
