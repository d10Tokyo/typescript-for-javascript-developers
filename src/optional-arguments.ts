export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (printable) {
    console.log(bmi);
  }
  return bmi;
};

// bim(身長, 体重, console.logで出力するかどうか)
// bim(1.79, 53, true)
// bmi(1.79, 53, false);
// bim(1.79, 53)
