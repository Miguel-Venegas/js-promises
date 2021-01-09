const willGetYouADog = new Promise((resolve, reject) => {
	const random = Math.random();
	if (random < .5) {
		resolve();
	} else {
		reject();
	}
})
willGetYouADog.then(() => {
	console.log('You got a dog!');
})

willGetYouADog.catch(() => {
	console.log('You did not get a dog!');
})