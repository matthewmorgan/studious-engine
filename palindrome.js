//requirement: integer input may not be converted to string

export default function(candidate){
  const digits = extract(candidate);
  while (digits.length > 1){
    let first = digits.shift();
    let last = digits.pop();
    if (first !== last) return false;
  }
  return true;
}

function extract(num){
  const digits = [];
  let total = num;
  while (total > 0){
    const digit = total % 10;
    total = Math.floor(total/10);
    digits.push(digit);
  }
  return digits;
}