	let randomNumber=Math.floor(Math.random()*100)+1;

	const guesses=document.querySelector('.guesses');
	const result=document.querySelector('.result');
	const loh=document.querySelector('.loh');
	const guessSubmit=document.querySelector('.guess_submit')
	const guessField=document.querySelector('.guess_field')

	let count=1;
	let resetButton;

	guessSubmit.addEventListener('click',checkGuess);

	function checkGuess(){

		let userGuess=Number(guessField.value);
		
		if(count===1)
		{
			guesses.textContent='Previous Guesses :';
		}

		guesses.textContent += userGuess+' ';
		if(userGuess===randomNumber)
		{
			guesses.textContent='';
			result.textContent='Congratulations You Won the game';
			result.style.backgroundColor='green';
			loh.textContent='';
			setGameOver();
		}
		else if(count==10)
		{
			guesses.textContent='';
			result.textContent='GameOver';
			result.style.backgroundColor='red';
			loh.textContent='';
			setGameOver();
		}
		else if(userGuess < randomNumber)
		{
			result.textContent='Wrong Answer'
			result.style.backgroundColor='red';
			loh.textContent='Tooo looowww';
		}
		else
		{
			result.textContent='Wrong Answer'
			result.style.backgroundColor='red';
			loh.textContent='Tooo hiiiighhhh';	
		}
		count+=1;
		guessField.value='';
		guessField.focus();
	}

	function setGameOver(){
		guessField.disabled=true;
		guessSubmit.disabled=true;
		resetButton=document.createElement('button')
		resetButton.textContent='Start new game';
		document.body.appendChild(resetButton);
		resetButton.addEventListener('click',resetGame);
	}

        // Spaces should be there in initializing variables
	function resetGame(){
		count=1;

		result.textContent='';
		resetButton.parentNode.removeChild(resetButton);

		guessField.disabled=false;
		guessSubmit.disabled=false;
		guessField.value='';
		guessField.focus();

		result.style.backgroundColor='white';
		randomNumber=Math.floor(Math.random()*100)+1;
	}
