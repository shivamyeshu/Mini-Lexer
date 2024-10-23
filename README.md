# MiniLang Lexer

This project is a simple lexer (tokenizer) for a custom mini-language called **MiniLang**. It tokenizes an input string into keywords, identifiers, numbers, and operators, laying the foundation for building an interpreter or compiler. The lexer can be easily extended and enhanced as you explore more advanced language processing concepts.

## Features
- Tokenizes **keywords** (`ye`, `bolo`).
- Recognizes **identifiers** (alphanumeric strings that aren't keywords).
- Supports **numbers** (sequences of digits).
- Handles basic **operators** (`+`, `-`, `*`, `/`, `=`).
- Skips over **whitespace** (spaces and newlines).

## How It Works

The lexer scans the input string character by character:
1. **Keywords**: Recognizes the words `ye` (for variable declaration) and `bolo` (for output).
2. **Identifiers**: Any alphanumeric string that isn't a keyword.
3. **Numbers**: Any sequence of digits is tokenized as a number.
4. **Operators**: Supports arithmetic and assignment operators (`+`, `-`, `*`, `/`, `=`).
5. **Whitespace**: Ignores spaces and newlines during tokenization.

---
### To run the lexer

compiler(`
  ye x = 10 
  ye y = 20
  ye sum = x + y
  bolo sum
`);

###
- happy coding 
