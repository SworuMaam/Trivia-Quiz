const questions = {
    easy: [
      {
        question: "What is the first letter of the alphabet?",
        options: ["A", "B", "C", "D"],
        correct: 0
      },
      {
        question: "In which direction does the sun set?",
        options: ["East", "West", "North", "South"],
        correct: 1
      },
      {
        question: "Where was Gautam Buddha born?",
        options: ["India", "China", "Nepal", "Bhutan"],
        correct: 2
      },
      {
        question: "Which is the tallest mountain?",
        options: ["Mt.Fuji", "Mt.Everest", "Mt.Annapurna", "Mt.Rainier"],
        correct: 1
      },
      {
        question: "How many lines make a triangle?",
        options: ["1", "2", "3", "4"],
        correct: 2
      },
    ],
    medium: [
      {
        question: "How many continents are there?",
        options: ["5", "6", "7", "8"],
        correct: 2
      },
      {
        question: "How many points are there in a circle?",
        options: ["0", "1", "2", "3"],
        correct: 0
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Iron", "Gold", "Platinum", "Diamond"],
        correct: 3
      },
      {
        question: "In which year did World War I begin?",
        options: ["1911", "1912", "1914", "1916"],
        correct: 2
      },
      {
        question: "What is the capital of China?",
        options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
        correct: 1
      },
    ],
    hard: [
      {
        question: "What is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correct: 0
      },
      {
        question: "Which physicist is known for the theory of relativity?",
        options: ["Newton", "Einstein", "Galileo", "Tesla"],
        correct: 1
      },
      {
        question: "What is the most widely spoken language in the world?",
        options: ["English", "Spanish", "Mandarin Chinese", "French"],
        correct: 2
      },
      {
        question: "Who wrote the novel 'One Hundred Years of Solitude'?",
        options: ["Gabriel Garcia Marquez", "Julio Cortázar", "Jorge Luis Borges", "Mario Vargas Llosa"],
        correct: 0
      },
      {
        question: "Who is the Prime Minister of Bhutan?",
        options: ["Tshering Tobgay", "Lotay Tshering", "Jigme Y. Thinley", "Dorji Choden"],
        correct: 1
      },
    ],
  };
  
  let currentQ = 0;
  let score = 0;
  let selectedDiff;
  let selectedQ;
  let selectedAnswer = null;
  
  function showDifficultySelection() {
    document.getElementById('main-page').classList.add('hidden'); 
    document.getElementById('difficulty-selection').classList.remove('hidden'); 
  }
  
  function startQuiz(difficulty) {
    selectedDiff = difficulty;
    selectedQ = questions[difficulty];
    currentQ = 0;
    score = 0;
  
    document.getElementById('difficulty-selection').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    showQ();
  }
  
  function showQ() {
    const question = selectedQ[currentQ];
    document.getElementById('question-number').innerText = `Question ${currentQ + 1} of ${selectedQ.length}`;
    document.getElementById('question-text').innerText = question.question;
  
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = ''; 
    question.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.onclick = () => selectAnswer(index, button); 
      optionsContainer.appendChild(button);
    });
  }
  
  function selectAnswer(index, button) {
    selectedAnswer = index;
  
    const buttons = document.querySelectorAll('#options-container button');
    buttons.forEach(btn => btn.classList.remove('selected'));
  
    button.classList.add('selected');
  }
  
  function submitAnswer() {
    if (selectedAnswer === null) {
      alert("Please select an answer.");
      return;
    }
  
    const correctAnswer = selectedQ[currentQ].correct;
    const correctAnswerText = selectedQ[currentQ].options[correctAnswer];
    if (selectedAnswer === correctAnswer) {
      score++;
      alert("Correct!");
    } else {
      alert(`Incorrect! The correct answer is: ${correctAnswerText}`);
    }
  
    currentQ++;
    selectedAnswer = null; 
  
    if (currentQ < selectedQ.length) {
      showQ();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
    document.getElementById('score').innerText = `You got ${score} out of ${selectedQ.length} correct.`;
  }
  
  function restartQuiz() {
    document.getElementById('result-container').classList.add('hidden');
    document.getElementById('difficulty-selection').classList.remove('hidden');
  }
  