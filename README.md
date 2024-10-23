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

## Example Input

ye x = 10 
ye y = 20
ye sum = x + y
bolo sum

## Example Output 

[
  { "type": "keyword", "value": "ye" },
  { "type": "identifier", "value": "x" },
  { "type": "operator", "value": "=" },
  { "type": "number", "value": "10" },
  { "type": "keyword", "value": "ye" },
  { "type": "identifier", "value": "y" },
  { "type": "operator", "value": "=" },
  { "type": "number", "value": "20" },
  { "type": "keyword", "value": "ye" },
  { "type": "identifier", "value": "sum" },
  { "type": "operator", "value": "=" },
  { "type": "identifier", "value": "x" },
  { "type": "operator", "value": "+" },
  { "type": "identifier", "value": "y" },
  { "type": "keyword", "value": "bolo" },
  { "type": "identifier", "value": "sum" }
]

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