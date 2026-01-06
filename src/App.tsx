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
		<main className="min-h-screen dark:bg-zinc-800 dark:text-white">
			<section className="max-w-[85rem] h-screen mx-auto flex flex-col gap-y-8 justify-center items-center p-4">
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
		</main>
	);
}

export default App;
