import { technicalQuestions, behaviorQuestions, comboQuestions } from "../util/questions";
import { useState, useEffect } from "react";

interface QuestionItem { 
  question: string;
  answer: string;
}

function HomePage() {
    const [currentQuestion, setCurrentQuestion] = useState<QuestionItem | string>("");
    const [showResource, setShowResource] = useState(false);
    const [showAnswerButton, setShowAnswerButton] = useState(false)
    const [showAnswer, setShowAnswer] = useState(false)

    const getRandomQuestionNumber = (arr: (string | QuestionItem)[]) => {
        setShowAnswerButton(false)
        const getNumber = Math.floor(Math.random() * arr.length);
        if (typeof arr[getNumber] !== "string") {
            setShowAnswerButton(true)
        }
        setCurrentQuestion(arr[getNumber]);
        setShowAnswer(false)
    };

    useEffect(() => {
        getRandomQuestionNumber(comboQuestions);
    }, []);

    const btnBase = "px-6 py-2.5 rounded-xl font-semibold transition-all active:scale-95 shadow-sm";
    const btnPrimary = `${btnBase} bg-blue-600 text-white hover:bg-blue-700 focus:ring-4 focus:ring-blue-200`;
    const btnOutline = `${btnBase} border-4 border-gray-800 text-gray-700 hover:bg-gray-50 dark:border-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-700`;

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 flex flex-col">
            <section className="flex-grow flex flex-col items-center justify-center p-6">
                <div className="w-full max-w-2xl">
                    {/* Flashcard Container */}
                    <div className="bg-white dark:bg-zinc-700 rounded-3xl shadow-xl border border-gray-100 dark:border-zinc-700 p-8 md:p-12 mb-8 min-h-[400px] flex flex-col items-center justify-center text-center">
                        <span className="text-blue-500 font-bold uppercase tracking-widest text-xs mb-4">Question</span>
                        
                        <h1 className="text-2xl md:text-3xl font-bold mb-8 leading-tight">
                            {typeof currentQuestion !== "string" ? currentQuestion.question : currentQuestion}
                        </h1>

                        {showAnswerButton && (
                            <button 
                                className={`${btnPrimary} mb-6`}
                                onClick={() => setShowAnswer(prev => !prev)}>
                                {showAnswer ? "Hide Answer" : "Reveal Answer"}
                            </button>
                        )}

                        {/* Answer Area with subtle animation */}
                        <div className={`w-full overflow-hidden transition-all duration-300 ${showAnswer ? "opacity-100 max-h-[1000px]" : "opacity-0 max-h-0"}`}>
                            <div className="pt-6 border-t border-gray-100 dark:border-zinc-700 text-gray-900 dark:text-zinc-100 text-2xl ">
                                {typeof currentQuestion !== "string" ? currentQuestion.answer : ''}
                            </div>
                        </div>
                    </div>

                    {/* Category Selection */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <button className={btnOutline} onClick={() => getRandomQuestionNumber(technicalQuestions)}>
                            Technical
                        </button>
                        <button className={btnOutline} onClick={() => getRandomQuestionNumber(behaviorQuestions)}>
                            Behavioral
                        </button>
                        <button className={btnPrimary} onClick={() => getRandomQuestionNumber(comboQuestions)}>
                            Next Random →
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer / Resources */}
            <footer className="bg-white dark:bg-zinc-800 border-t border-gray-200 dark:border-zinc-700 p-6">
                <div className="max-w-4xl mx-auto">
                    <button
                        className="flex items-center gap-2 font-medium hover:text-blue-600 transition-colors"
                        onClick={() => setShowResource((prev) => !prev)}>
                        <div className={`transform transition-transform ${showResource ? 'rotate-45' : ''}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        Study Resources
                    </button>
                    
                    {showResource && (
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 animate-in fade-in slide-in-from-bottom-2">
                            {[
                                { label: "Frontend Handbook", url: "https://www.frontendinterviewhandbook.com/trivia" },
                                { label: "Behavior Docs", url: "https://docs.google.com/document/d/1FOFw3xZ2ZvBcMgUUW7Co17lEixwKvATfjSjZl-MiThc/edit" },
                                { label: "100Devs Sheet", url: "https://docs.google.com/document/d/1p7DhCsLOMMybYfePWLlD1-_8KU20zkBoArH4pnW1o3c/edit" }
                            ].map((link) => (
                                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" 
                                   className="p-3 rounded-lg bg-gray-50 dark:bg-zinc-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-sm border border-transparent hover:border-blue-200 transition-all text-blue-600 dark:text-blue-400">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </footer>
        </main>
    );
}

export default HomePage;
