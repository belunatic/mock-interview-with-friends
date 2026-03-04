import { useState } from "react";
import { technicalQuestions } from "../util/questions";
import SearchBar from "../components/SearchBar";

type Question = {
	question: string;
	answer: string;
};

// Sub-component for individual items
function QuestionItem({ fq }: { fq: Question }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden transition-all">
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
				<h3
					className={`text-lg font-medium ${isOpen ? "text-blue-600" : "text-gray-900"}`}>
					{fq.question}
				</h3>
				{/* Animated Chevron Icon */}
				<span
					className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
					▼
				</span>
			</button>

			{/* Accordion Content */}
			<div
				className={`transition-all duration-300 ease-in-out ${
					isOpen
						? "max-h-96 opacity-100 p-5 pt-0"
						: "max-h-0 opacity-0 overflow-hidden"
				}`}>
				<div className="border-t border-gray-100 pt-4 text-gray-600 leading-relaxed">
					{fq.answer}
				</div>
			</div>
		</div>
	);
}

function SearchPage() {
	const [search, setSearch] = useState("");
	const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

	const handleSubmit = () => {
		const filtered = technicalQuestions.filter(
			(q) =>
				search === "" ||
				q.question.toLowerCase().includes(search.toLowerCase()),
		);
		setFilteredQuestions(filtered);
	};

	return (
		<main className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-zinc-100 flex flex-col">
			<section className="flex-grow flex flex-col items-center  p-6">
				<div className="w-full max-w-2xl">
					<header className="mb-10 text-center">
						<h1 className="text-4xl font-black text-gray-900 tracking-tight">
							Search Center
						</h1>
					</header>

					<section className="mb-8">
						<SearchBar
							value={search}
							onChange={setSearch}
							onSubmit={handleSubmit}
						/>
					</section>

					<div className="space-y-3">
						{filteredQuestions.map((fq, index) => (
							<QuestionItem key={index} fq={fq} />
						))}
					</div>
				</div>
			</section>
		</main>
	);
}

export default SearchPage;
