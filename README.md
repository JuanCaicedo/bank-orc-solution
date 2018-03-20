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
