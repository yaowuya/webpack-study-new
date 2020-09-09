// 引入
import print from './print';
import '../css/iconfont.css';
import '../css/index.less';

console.log('index.js文件被加载了~');

print();

function add(x, y) {
<<<<<<< HEAD
	return x + y;
=======
  return x + y;
>>>>>>> 99b66cc10789364ca0252361fe2eaae1a828c133
}

console.log(add(1, 3));

if (module.hot) {
<<<<<<< HEAD
	// 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
	module.hot.accept('./print.js', () => {
		// 方法会监听 print.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。
		// 会执行后面的回调函数
		print();
	});
=======
  // 一旦 module.hot 为true，说明开启了HMR功能。 --> 让HMR功能代码生效
  module.hot.accept('./print.js', function() {
    // 方法会监听 print.js 文件的变化，一旦发生变化，其他模块不会重新打包构建。
    // 会执行后面的回调函数
    print();
  });
>>>>>>> 99b66cc10789364ca0252361fe2eaae1a828c133
}
