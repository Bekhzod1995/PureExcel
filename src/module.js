console.log('Module');

async function start() {
  return await Promise.resolve('async is workingsds!!');
}

start().then(console.log);
