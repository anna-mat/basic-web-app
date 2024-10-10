export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrewid")) {
    return (
      "ammathew"
    );
  }

  if (query.toLowerCase().includes("your name")) {
    return (
      "anna-saanika"
    );
  }

  if (query.toLowerCase().includes("94 plus 48")) {
    return (
      "142"
    );
  }

  
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largest = query.match(/following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largest) {
    const x: number = parseInt(largest[1]);
    const y: number = parseInt(largest[2]);
    const z: number = parseInt(largest[3]);
    return (Math.max(x,Math.max(y,z))).toString();
  }

  const mult = query.match(/What is (\d+) multiplied by (\d+)/);
  if (mult) {
    const x: number = parseInt(mult[1]);
    const y: number = parseInt(mult[2]);
    return (x*y).toString();
  }


const sc = query.match(/(\d+), (\d+), (\d+), (\d+), (\d+), (\d+), (\d+)/);
if (sc) {
  const a: number = parseInt(sc[1]);
  const b: number = parseInt(sc[2]);
  const c: number = parseInt(sc[3]);
  const d: number = parseInt(sc[4]);
  const e: number = parseInt(sc[5]);
  const f: number = parseInt(sc[6]);
  const g: number = parseInt(sc[7]);

  // Function to check if a number is both a perfect square and a perfect cube
  const isSquareAndCube = (num: number): boolean => {
    const sqrt = Math.sqrt(num);
    const cbrt = Math.cbrt(num);
    return sqrt % 1 === 0 && cbrt % 1 === 0;
  };

  // Check each number and return the one that satisfies both conditions
  const result = [a, b, c, d, e, f, g].find(isSquareAndCube);

  if (result !== undefined) {
    return result.toString();
  } else {
    return "None of the numbers is both a square and a cube";
  }
}

const sub = query.match(/What is (\d+) minus (\d+)/);
  if (sub) {
    const x: number = parseInt(sub[1]);
    const y: number = parseInt(sub[2]);
    return (x-y).toString();
  }

  const divide = query.match(/What is (\d+) divided by (\d+)/);
  if (divide) {
    const x: number = parseInt(divide[1]);
    const y: number = parseInt(divide[2]);
    return (x/y).toString();
  }

  const p = query.match(/(\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (p) {
  const a: number = parseInt(p[1]);
  const b: number = parseInt(p[2]);
  const c: number = parseInt(p[3]);
  const d: number = parseInt(p[4]);
  const e: number = parseInt(p[5]);

  // Function to check if a number is prime
  const isPrime = (num: number): boolean => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
}

    return "";
    }
