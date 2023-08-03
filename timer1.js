const args = process.argv.slice(2)

//loop through args array
for (time of args) {
  
  if (parseInt(time) < 0) {
    continue;
  }
  else if (Number.isNaN(parseInt(time))) {
    continue
  }
  else {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, parseInt(time) * 1000);
  }
}
//setTimeout to make notification for each arg, at number(arg) * 1000ms
//turn array item into .Number()

