function lexer(input) {
    const token = [];
    let cursor = 0;

    // Iterate through the input string
    while (cursor < input.length) {
        let char = input[cursor];

        // Skip whitespace
        if (char === ' ' || char === '\n') { // Handle newline as well
            cursor++;
            continue;
        }

        // Tokenize keywords and identifiers
        if (/[a-zA-Z]/.test(char)) {
            let word = '';
            while (/[a-zA-Z0-9]/.test(char)) {
                word += char;
                char = input[++cursor];
            }
            if (word === 'ye' || word === 'bolo') {
                token.push({ type: 'keyword', value: word });
            } else {
                token.push({ type: 'identifier', value: word });
            }
            continue;
        }

        // Tokenize numbers
        if (/[0-9]/.test(char)) {
            let num = '';
            while (/[0-9]/.test(char)) {
                num += char;
                char = input[++cursor];
            }
            token.push({ type: 'number', value: num });
            continue;
        }

        // Tokenize operators and assignment
        if (/[\+\-\*\/=]/.test(char)) {
            token.push({ type: 'operator', value: char });
            cursor++;
            continue;
        }
    }

    return token;
}

function compiler(input) {
    const tokens = lexer(input);
    console.log(tokens);
}

const code = `
ye x = 10 
ye y = 20 
ye z = 30

ye sum = x + y
ye mul = y * z

bolo sum
bolo mul
`;

compiler(code);
