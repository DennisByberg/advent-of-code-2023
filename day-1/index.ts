function getSumOfAllCalibrationValues(localTxtFile: string): Promise<number> {
  const fs = require("fs");
  let sum: number = 0;

  return new Promise((resolve) => {
    fs.readFile(localTxtFile, "utf8", (err: any, data: any) => {
      const dataArray = data.split("\n");

      for (let i = 0; i < dataArray.length; i++) {
        let numbers: number[] = [];
        for (let j = 0; j < dataArray[i].length; j++) {
          if (!isNaN(parseInt(dataArray[i][j]))) {
            numbers.push(parseInt(dataArray[i][j]));
          }
        }
        let firstDigit = numbers[0];
        let secondDigit: number;

        if (numbers.length > 1) {
          secondDigit = numbers[numbers.length - 1];
        } else {
          secondDigit = numbers[0];
        }

        let twoDigitNumber = parseInt(`${firstDigit}${secondDigit}`);
        sum += twoDigitNumber;
      }
      resolve(sum);
    });
  });
}

getSumOfAllCalibrationValues("./day-1/input.txt").then((sum) =>
  console.log(sum)
);
