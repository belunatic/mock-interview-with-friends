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

	return (
		<section className="min-h-screen dark:bg-zinc-800 dark:text-white">
			<main className="max-w-[85rem] h-screen w-auto flex justify-center items-center p-4">
				<h1 className="text-2xl font-bold">
					{currentQuestion ? comboQuestion[currentQuestion] : ""}
				</h1>
			</main>
		</section>
	);
}

export default App;
