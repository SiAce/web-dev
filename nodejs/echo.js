/* eslint-disable no-plusplus */
function echo(string, number) {
  for (let i = 0; i < number; i += 1) {
    console.log(string);
  }
}

let array = [];

array.forEach((element) => {
  console.log(element);
});

array = [2];

echo('asdofij', 12);
echo('Geralt', 7);
