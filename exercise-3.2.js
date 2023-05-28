const getDivisors = (num) => {
    const a = [];
    for (let i=1; i<Math.sqrt(num); i++) {
        if (i*i === num) {
            a.push(i);
        }
        else if (num%i === 0) {
            a.push(i, num/i);
        }
    }
    return a.sort((first, second) => first - second);
};

getDivisors(5);

getDivisors(24);

getDivisors(196); 