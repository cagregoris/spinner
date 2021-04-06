let delay = 200;
const animation = ['|', '/', '-', '\\', '|'];

for(let i = 0; i < animation.length; i ++) {
  setTimeout(() => {
    process.stdout.write(`\r ${animation[i]}    `)
  }, delay * i)
}

const end  = function() {
  process.stdout.write('\n');
}

setTimeout(end, 1400);
