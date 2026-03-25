// import { useState } from "react";
// import { technicalQuestions, behaviorQuestions } from "../util/questions";
// import SearchBar from "../components/SearchBar";
// import QuestionItem from "../components/QuestionItem";

// type Question = {
//   question: string;
//   answer: string;
// };

// function SearchPage() {
//   const [search, setSearch] = useState("");
//   const [filteredQuestions, setFilteredQuestions] = useState<(string | Question)[]>(
//     [],
//   );

//   const handleSubmit = () => {
//     //throw an error if the search field is empty or empty space
//     if (search.trim() === "") {
//       console.log("Enter a key word");
//       return;
//     }
//     const filteredTechnical = technicalQuestions.filter((q) =>
//       q.question.toLowerCase().includes(search.toLowerCase()),
//     );
//     const filteredBehavior = behaviorQuestions.filter((item) => {
//       return item.toLowerCase().includes(search.toLowerCase());
//     });
//     setFilteredQuestions([...filteredTechnical, ...filteredBehavior]);
//   };

//   return (
//     <main className="min-h-screen bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-zinc-100 flex flex-col">
//       <section className="flex-grow flex flex-col items-center  p-6">
//         <div className="w-full max-w-2xl">
//           <header className="mb-10 text-center">
//             <h1 className="text-4xl font-black text-gray-300 tracking-tight">
//               Search Center
//             </h1>
//           </header>

//           <section className="mb-8 text-gray-900">
//             <SearchBar
//               value={search}
//               onChange={setSearch}
//               onSubmit={handleSubmit}
//             />
//           </section>

//           <div className="space-y-3 ">
//             {filteredQuestions.map((fq, index) => (
//               <QuestionItem key={index} fq={fq} />
//             ))}
//           </div>
//           {/* <div className="space-y-3 ">
//             {filteredItems.map((item) => (
//               <li>{item} </li>
//             ))}
//           </div> */}
//         </div>
//       </section>
//     </main>
//   );
// }

// export default SearchPage;

// import { technicalQuestions, behaviorQuestions } from "../util/questions";
// import { useSearchParams } from "react-router-dom";
// import { useState, useMemo } from "react";

// function SearchPage() {
//   const [searchParams] = useSearchParams();
//   const [openIndex, setOpenIndex] = useState<number | null>(null);
//   const query = searchParams.get("q")?.toLowerCase() || "";

//   // Memoize the list merge to avoid recalculating on every toggle
//   const allFilteredItems = useMemo(() => {
//     const behaviorWithAnswers = behaviorQuestions.map((q) => ({
//       question: q,
//       answer: "", // You can update these with actual data later
//     }));
//     return [...technicalQuestions, ...behaviorWithAnswers];
//   }, []);

//   const filter = allFilteredItems.filter((item) => {
//     if (query === "") return false;
//     return item.question.toLowerCase().includes(query);
//   });

//   const toggleAnswer = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <main className="min-h-screen bg-white dark:bg-zinc-700 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
//       <div className="max-w-3xl mx-auto">

//         {/* Header/Status Section */}
//         <header className="mb-10 text-center">
//           <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100 mb-2">Search Results</h1>
//           {query && (
//             <p className="text-zinc-500 dark:text-zinc-400">
//               Showing results for: <span className="font-medium text-zinc-800 dark:text-zinc-200">"{query}"</span>
//             </p>
//           )}
//         </header>

//         {query === "" ? (
//           /* Empty State */
//           <div className="flex flex-col items-center justify-center h-64 border-zinc-300 dark:border-zinc-700 rounded-2xl">
//             <p className="text-zinc-800 text-lg dark:text-zinc-200">Type something in the search bar to get started.</p>
//           </div>
//         ) : filter.length > 0 ? (
//           /* Results List */
//           <ul className="space-y-4">
//             {filter.map((item, index) => (
//               <li
//                 key={index}
//                 className="group bg-white dark:bg-zinc-700 border border-zinc-200 dark:border-zinc-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
//                 onClick={() => toggleAnswer(index)}
//               >
//                 {/* Question Row */}
//                 <div className={`p-5 flex items-center justify-between transition-colors ${openIndex === index ? 'bg-zinc-50 dark:bg-zinc-700/50' : ''}`}>
//                   <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100 leading-tight">
//                     {item.question}
//                   </p>
//                   <span className={`ml-4 text-zinc-400 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}>
//                     {item.answer ? "▼" : ""}
//                   </span>
//                 </div>

//                 {/* Animated Answer Section */}
//                 {openIndex === index && item.answer && (
//                   <div className="px-5 pb-5 pt-2 animate-in fade-in slide-in-from-top-1 duration-200">
//                     <div className="h-px bg-zinc-100 dark:bg-zinc-700 mb-4" />
//                     <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed italic">
//                       {item.answer}
//                     </p>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           /* No Results State */
//           <div className="text-center py-20">
//             <p className="text-zinc-500 text-xl italic">No matches found for "{query}". Try a different keyword!</p>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }

// export default SearchPage;

import { technicalQuestions, behaviorQuestions } from "../util/questions";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
// Import your sub-component
import QuestionItem from "../components/QuestionItem";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const allFilteredItems = useMemo(() => {
    const behaviorWithAnswers = behaviorQuestions.map((q) => ({
      question: q,
      answer: "No specific answer provided yet.",
    }));
    return [...technicalQuestions, ...behaviorWithAnswers];
  }, []);

  const filteredResults = allFilteredItems.filter((item) => {
    if (query === "") return false;
    return item.question.toLowerCase().includes(query);
  });

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
            Search Results
          </h1>
          {query && <p className="text-zinc-500">Matches for: "{query}"</p>}
        </header>

        {query === "" ? (
          <div className="text-center py-20 text-zinc-500">
            Type to start searching...
          </div>
        ) : filteredResults.length > 0 ? (
          /* CLEANER LIST: Using the QuestionItem component */
          <div className="space-y-4">
            {filteredResults.map((item) => (
              //   <QuestionItem key={index} fq={item} />
              <QuestionItem
                key={typeof item === "object" ? item.question : item}
                fq={item}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 italic text-zinc-500">
            No matches found.
          </div>
        )}
      </div>
    </main>
  );
}

export default SearchPage;
