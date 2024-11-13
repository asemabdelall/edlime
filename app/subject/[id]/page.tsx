"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Footer from "@/app/components/dashboard/dashboardfooter";
import { Client, Databases } from "appwrite";

export default function SubjectDetail() {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [subjectData, setSubjectData] = useState<any>(null);
  const [messages, setMessages] = useState<{ user: string; ai: string }[]>([]);
  const [input, setInput] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("المعلم الذكي");

  // Initialize Appwrite Client
  const client = new Client();
  const databases = new Databases(client);
  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("673312110017106ece47");

  useEffect(() => {
    const url = new URL(window.location.href);
    const subjectId = url.pathname.split("/").pop();
    if (subjectId) setId(subjectId);
  }, []);

  useEffect(() => {
    if (id) {
      const fetchSubject = async () => {
        try {
          const response = await databases.getDocument(
            "67331337000314c16e4a", // Replace with your Database ID
            "673313400022987c4fe6", // Replace with your Collection ID
            id
          );
          setSubjectData(response);
        } catch (error) {
          console.error("Failed to fetch subject details:", error);
          setSubjectData(null);
        }
      };

      fetchSubject();
    }
  }, [id]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input.trim();

    setMessages((prev) => [...prev, { user: userMessage, ai: "" }]);
    setInput("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                `اسمك هو المعلم الذكي. يجب أن تجيب دائمًا باسم المعلم الذكي، وتستخدم المعلومات فقط من المنهج الكويتي ${subjectData?.subject_name}.`,
            },
            {
              role: "user",
              content: userMessage,
            },
          ],
          max_tokens: 150,
        }),
      });      

      const data = await response.json();

      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1].ai =
          data.choices?.[0]?.message?.content?.trim() || "No response";
        return updatedMessages;
      });
    } catch (error) {
      console.error("Error with AI response:", error);
      setMessages((prev) => {
        const updatedMessages = [...prev];
        updatedMessages[updatedMessages.length - 1].ai =
          "عذرًا، حدث خطأ في النظام.";
        return updatedMessages;
      });
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <section className="flex-grow">
        <div className="mx-auto w-full sm:w-3/5 text-center mb-4 mt-[75px]">
          <div className="relative w-full h-[180px] m-auto rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-[#af40ff] via-[#5b42f3] to-[#00ddeb]">
            <div className="flex items-center justify-center gap-4 text-white font-semibold absolute inset-0">
              {subjectData?.icon && (
                <Image
                  src={subjectData.icon}
                  alt={subjectData?.subject_name || "Subject Icon"}
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              )}
              <p className="text-3xl sm:text-3xl font-extrabold break-words">
                {subjectData?.subject_name || "مادة غير معروفة"}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-gray-800 p-4 rounded-md mx-auto sm:w-3/5 flex flex-col h-[60vh]">
          {/* Tabs Navigation */}
          <div className="flex justify-center space-x-4 mb-6">
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "المعلم الذكي"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveTab("المعلم الذكي")}
            >
              المعلم الذكي
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                activeTab === "الموارد التعليمية"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-300"
              }`}
              onClick={() => setActiveTab("الموارد التعليمية")}
            >
              الموارد التعليمية
            </button>
          </div>

          {/* Tabs Content */}
          <div className="flex-grow overflow-hidden">
            {activeTab === "المعلم الذكي" && (
              <div className="flex flex-col h-full">
                {/* Chatbox */}
                <div className="flex-grow overflow-y-auto bg-gray-700 p-4 rounded-md space-y-4">
                  {messages.map((msg, idx) => (
                    <div key={idx} className="space-y-2">
                      {/* User Message */}
                      <div className="text-right">
                        <p className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg max-w-full break-words">
                          {msg.user}
                        </p>
                      </div>
                      {/* AI Message */}
                      <div className="text-left">
                        <p className="inline-block bg-gray-600 text-white px-4 py-2 rounded-lg max-w-full break-words">
                          {msg.ai}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === "الموارد التعليمية" && (
              <div>
                <h2 className="text-xl font-bold mb-4">الموارد التعليمية</h2>
                <p>هنا ستجد موارد تعليمية مفيدة لدعم تعلمك.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Input Box Fixed at Bottom for All Screens */}
      {activeTab === "المعلم الذكي" && (
        <div className="w-full sm:w-3/5 mx-auto bg-gray-800 p-2 fixed bottom-0 left-0 right-0 flex items-center space-x-2">
          <input
            type="text"
            className="flex-grow p-3 rounded-l-full bg-gray-700 text-white outline-none min-w-0 max-w-full"
            placeholder="اكتب رسالتك..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-3 rounded-r-full flex-shrink-0"
            onClick={handleSendMessage}
          >
            إرسال
          </button>
        </div>
      )}
    </div>
  );
}
