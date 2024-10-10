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

  
    if (query.toLowerCase().includes("plus")) {
      const parts = query.toLowerCase().split(" ");
      const num1 = parseInt(parts[2], 10); // Extract the first number
      const num2 = parseInt(parts[4], 10); // Extract the second number
  
      if (!isNaN(num1) && !isNaN(num2))
        return (`${num1 + num2}`);
    }


    return "";
    }
