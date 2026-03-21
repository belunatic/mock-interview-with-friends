import { useState } from "react";

type Question = {
  question: string;
  answer: string;
};

// Sub-component for individual items
export default function QuestionItem({ fq }: { fq: Question | string }) {
  const [isOpen, setIsOpen] = useState(false);

  const isQuestionObject = typeof fq === "object" && "question" in fq; //this represents our technical question

  return (
    <div className="group bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer">
      {isQuestionObject ? (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
          >
            <h3
              className={`text-lg font-medium ${isOpen ? "text-blue-600" : "text-gray-200"}`}
            >
              {fq.question}
            </h3>
            {/* Animated Chevron Icon */}
            <span
              className={`transform transition-transform duration-200 dark:text-zinc-200 ${isOpen ? "rotate-180" : ""}`}
            >
              ▼
            </span>
          </button>

          {/* Accordion Content */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isOpen
                ? "max-h-96 opacity-100 p-5 pt-0"
                : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <div className="border-t border-gray-100 pt-4 dark:text-gray-200 leading-relaxed">
              {fq.answer}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 text-gray-900">{fq}</div>
      )}
    </div>
  );
}
