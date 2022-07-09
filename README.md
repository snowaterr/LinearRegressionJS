# LinearRegressionJS
JavaScript的线性回归算法，支持多元拟合，采用最小二乘法

算法来源 [jstat库](https://github.com/jstat/jstat)

在库中添加了线性回归的API使得使用更便捷，使用示例如下：
```
// 1维或2维数组
var t = [   [1.0, 0.1],
            [2.0, 0.2],
            [2.8, 0.3],
            [4.1, 0.4],
            [4.8, 0.5]]
// 1维或2维数组
var v=[ [1.1, 0.9, 1.2],
        [2.1, 1.9, 2.4],
        [3.9, 3.2, 3.7],
        [4.5, 3.8, 4.6],
        [5.8, 5.8, 6.9]];

// 建立线性回归模型
var LRModel = jStat.zim.LinearRegression(t, v);
// 预测
var predict = LRModel.predict([10,1]);
```
