const { solution } = require('./day1');
const { performance } = require('perf_hooks');

function generateLargeInput(size) {
    const input = [];
    for (let i = 0; i < size; i++) {
        const num1 = Math.floor(Math.random() * 5000) - 2500;
        const num2 = Math.floor(Math.random() * 5000) - 2500;
        input.push(`${num1} ${num2}`);
    }
    return input;
}

test('solution performance and memory usage for large input', () => {
	const input_size = 100000;
    const input = generateLargeInput(input_size); // Adjust size as needed

    const start = performance.now();
    const result = solution(input);
    const end = performance.now();

    const executionTime = end - start;

	console.log(`Results for input of size ${input_size} entries`)
    console.log(`Execution time: ${executionTime} milliseconds`);
    console.log(`Memory usage: ${JSON.stringify(process.memoryUsage())}`);
});

test('day1 calculates correct distance for example input', () => {
    const input = [
        '3   4',
        '4   3',
        '2   5',
        '1   3',
        '3   9',
        '3   3'
    ];
    const result = solution(input);
    expect(result).toBe(11);
});

test('day1 calculates correct distance for another input', () => {
    const input = [
        '1 2',
        '2 3',
        '3 4',
        '4 5',
        '5 6'
    ];
    const result = solution(input);
    expect(result).toBe(5);
});

test('day1 calculates correct distance for identical lists', () => {
	const input = [
		'1 1',
		'2 2',
		'3 3',
		'4 4',
		'5 5'
	];
	const result = solution(input);
	expect(result).toBe(0);
});

test('day1 calculates correct distance for reversed lists', () => {
	const input = [
		'1 5',
		'2 4',
		'3 3',
		'4 2',
		'5 1'
	];
	const result = solution(input);
	expect(result).toBe(0);
});

test('day1 calculates correct distance for mixed lists', () => {
	const input = [
		'10 20',
		'30 40',
		'50 60',
		'70 80',
		'90 100'
	];
	const result = solution(input);
	expect(result).toBe(50);
});