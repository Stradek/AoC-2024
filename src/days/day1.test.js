const day1 = require('./day1');

test('hello world!', () => {
	expect(1 + 1).toBe(2);
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
    const result = day1.solution(input);
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
    const result = day1.solution(input);
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
	const result = day1.solution(input);
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
	const result = day1.solution(input);
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
	const result = day1.solution(input);
	expect(result).toBe(50);
});