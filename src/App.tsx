import { technicalQuestions, behaviorQuestions } from "./util/questions";
import { useState, useEffect } from "react";

function App() {
	//current question
	const [currentQuestion, setCurrentQuestion] = useState("");
	//combineQuestion
	const [comboQuestions] = useState([
		...technicalQuestions,
		...behaviorQuestions,
	]);
	const [showResource, setShowResource] = useState(false);

	//get a random question
	const getRandomQuestionNumber = (arr: string[]) => {
		const getNumber = Math.floor(Math.random() * arr.length);
		console.log(getNumber, arr[getNumber]);
		//set the question to currentQuestion state
		setCurrentQuestion(arr[getNumber]);
	};

	useEffect(() => {
		getRandomQuestionNumber(comboQuestions);
	}, []);

	const handleNext = () => {
		getRandomQuestionNumber(comboQuestions);
	};
	const technicalNext = () => {
		getRandomQuestionNumber(technicalQuestions);
	};
	const behaviorNext = () => {
		getRandomQuestionNumber(behaviorQuestions);
	};

	return (
		<main className="min-h-screen dark:bg-zinc-800 dark:text-white flex flex-col">
			<section className="max-w-[85rem] grow mx-auto flex flex-col gap-y-8 justify-center items-center p-4">
				<h1 className="text-2xl font-bold text-center">{currentQuestion}</h1>
				<section className="flex flex-col md:flex-row md:gap-x-4 gap-y-4">
					<button
						className="px-4 py-2 rounded-sm bg-blue-500 cursor-pointer"
						onClick={technicalNext}>
						Technical
					</button>
					<button
						className="px-4 py-2 rounded-sm bg-blue-500 cursor-pointer"
						onClick={behaviorNext}>
						Behavior
					</button>
					<button
						className="px-4 py-2 rounded-sm bg-blue-500 cursor-pointer"
						onClick={handleNext}>
						Random
					</button>
				</section>
			</section>
			<footer className="border-t dark:border-white border-black pt-2 pb-4 px-4">
				<div className="max-w-[85rem] mx-auto">
					<p
						className="flex gap-x-2 items-center cursor-pointer"
						onClick={() => setShowResource((prev) => !prev)}>
						{!showResource ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="size-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 4.5v15m7.5-7.5h-15"
								/>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								className="size-6">
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M5 12h14"
								/>
							</svg>
						)}
						Resource
					</p>
					{showResource && (
						<div>
							<ul className="ps-8">
								<li>
									<a
										href="https://www.frontendinterviewhandbook.com/trivia"
										target="_blank"
										className="underline text-blue-500">
										Technical Questions
									</a>
								</li>
								<li>
									<a
										href="https://docs.google.com/document/d/1FOFw3xZ2ZvBcMgUUW7Co17lEixwKvATfjSjZl-MiThc/edit?usp=sharing"
										target="_blank"
										className="underline text-blue-500">
										Behavior Questions
									</a>
								</li>
								<li>
									<a
										href="https://docs.google.com/document/d/1p7DhCsLOMMybYfePWLlD1-_8KU20zkBoArH4pnW1o3c/edit?usp=sharing"
										target="_blank"
										className="underline text-blue-500">
										100Devs Interview Questions
									</a>
								</li>
							</ul>
						</div>
					)}
				</div>
			</footer>
		</main>
	);
}

export default App;
