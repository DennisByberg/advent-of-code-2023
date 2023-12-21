function getSumOfAllCalibrationValues(localTxtFile: string): Promise<number> {
  const fs = require("fs");
  let sum: number = 0;

  return new Promise((resolve) => {
    fs.readFile(localTxtFile, "utf8", (error: any, data: any) => {
      if (error) return;
      const dataArray = data.split("\n");

      for (let i = 0; i < dataArray.length; i++) {
        let numbers: number[] = [];
        for (let j = 0; j < dataArray[i].length; j++) {
          if (!isNaN(parseInt(dataArray[i][j]))) {
            numbers.push(parseInt(dataArray[i][j]));
          }
        }
        const firstDigit = numbers[0];
        const secondDigit =
          numbers.length > 1 ? numbers[numbers.length - 1] : numbers[0];

        let twoDigitNumber = parseInt(`${firstDigit}${secondDigit}`);
        sum += twoDigitNumber;
      }
      resolve(sum);
    });
  });
}

getSumOfAllCalibrationValues("./day-1/input.txt")
  .then((sum) => console.log(sum))
  .catch((err) => console.error(err));
