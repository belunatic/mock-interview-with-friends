import { technicalQuestions, behaviorQuestions } from "./util/questions";
import { useState, useEffect } from "react";

function App() {
	//current question
	const [currentQuestion, setCurrentQuestion] = useState<number | null>(null);
	//combineQuestion
	const [comboQuestion, setComboQuestion] = useState([
		...technicalQuestions,
		...behaviorQuestions,
	]);

	useEffect(() => {
		//get a random question
		const getRandomQuestionNumber = () => {
			const getNumber = Math.floor(Math.random() * comboQuestion.length);
			console.log(getNumber);
			//set the question to currentQuestion state
			setCurrentQuestion(getNumber);
		};

		getRandomQuestionNumber();
	}, []);

	const handleNext = () => {
		const getNumber = Math.floor(Math.random() * comboQuestion.length);
		console.log(getNumber);
		//set the question to currentQuestion state
		setCurrentQuestion(getNumber);
	};

	return (
		<main className="min-h-screen dark:bg-zinc-800 dark:text-white">
			<section className="max-w-[85rem] h-screen w-auto flex flex-col gap-y-8 justify-center items-center p-4">
				<h1 className="text-2xl font-bold text-center">
					{currentQuestion ? comboQuestion[currentQuestion] : ""}
				</h1>
				<button
					className="px-4 py-2 rounded-sm bg-blue-500 cursor-pointer"
					onClick={handleNext}>
					Next
				</button>
			</section>
		</main>
	);
}

export default App;
