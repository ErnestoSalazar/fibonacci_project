import { GetFibonnaciProps } from "./types";

export function getFibonnaci({ requestedNumber }: GetFibonnaciProps): number {
  if (requestedNumber <= 1) return requestedNumber;

  let thirdValue = 0;
  let secondValue = 1;
  let current = 0;

  for (let index = 2; index <= requestedNumber; index++) {
    current = secondValue + thirdValue;
    thirdValue = secondValue;
    secondValue = current;
  }

  return current;
}
