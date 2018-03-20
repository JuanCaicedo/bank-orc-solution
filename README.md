# TestDouble Test

## Instructions

https://github.com/testdouble/contributing-tests/wiki/Bank-OCR-kata

## How to run

```
npm run test
```

## TODO
- [ ] validate that getAccountNumber receives strings that are actually numbers
- [X] replace splitIntoChunks with ramda function
- [ ] more elegant solution for parseSingleNumber instead of lots of ifs
- [ ] add docstrings for all functions

## User story 3 approach
- Instead of throwing error in `getAccountNumber`, return parsed account number
  with `" ERR"` attached.
- Add else block in `parseSingleNumber` to return question mark
- In `getAccountNumber`, inspect account number for question marks and add `"
  ILL"` if there are any.

## User story 4 approach
- For numbers that fail the checksum validation, generate all possibilities
  based on the common mistakes described in the user story
- Get the checksum for all possibilities
- If only one checksum is valid, return that possibility
- If no checksum is valid, return the originally parsed account number plus
  `" ERR"`
- If multiple checksums are valid, return those possibilities with `"AMB"`
- For `ILL` numbers, I would need more details to understand how to move
  forward. I don't completely understand how to generate possibilities. If it's
  possible that an illegible (`?`) number has pipe or underscore errors, I think
  we would need to try changing each character one by one and testing if that
  results in a valid number. That would result in a lot of permutations, but it
  should be possible.
