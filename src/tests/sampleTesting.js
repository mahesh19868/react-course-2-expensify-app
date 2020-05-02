const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') =>  `Hello ${name}!`;

test('should add 2 numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);    
});


test('should generate valid greeting with name', () => {
    const result = generateGreeting('Mahesh');
    expect(result).toBe('Hello Mahesh!');
});

test('should generate valid anonymous greeting', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});