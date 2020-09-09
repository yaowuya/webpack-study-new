// import '@babel/polyfill';

<<<<<<< HEAD
const add = (x, y) => x + y;
console.log(add(2, 5));

const promise = new Promise((resolve) => {
	setTimeout(() => {
		console.log('定时器执行完了~');
		resolve();
	}, 1000);
=======
const add = (x, y) => {
  return x + y;
};
console.log(add(2, 5));

const promise = new Promise(resolve => {
  setTimeout(() => {
    console.log('定时器执行完了~');
    resolve();
  }, 1000);
>>>>>>> 99b66cc10789364ca0252361fe2eaae1a828c133
});

console.log(promise);
