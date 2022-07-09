// 1、jstat 原生线性回归API
var A=[ [1,2,3],
        [1,1,0],
        [1,-2,3],
        [1,3,4],
        [1,-10,2],
        [1,4,4],
        [1,10,2],
        [1,3,2],
        [1,4,-1]];
var b1 = [1,-2,3,4,-5,6,7,-8,9];
var b2 = [  [1,1],
            [-2,2],
            [3,3],
            [4,4],
            [-5,5],
            [6,6],
            [7,7],
            [-8,8],
            [9,9]];

var model = jStat.models.ols(b1,A);

// coefficient estimated
console.log('[JStat.model]coefficient estimated: ' + model.coef); // -> [0.662197222856431, 0.5855663255775336, 0.013512111085743017]

// R2
console.log('[JStat.model]R2: ' + model.R2) // -> 0.309

// t test P-value
console.log('[JStat.model]t test P-value: ' + model.t.p) // -> [0.8377444317889267, 0.15296736158442314, 0.9909627983826583]

// f test P-value
console.log('[JStat.model]f test P-value: ' + model.f.pvalue) // -> 0.3306363671859872


// 2、zim扩展的线性回归API
var t=[1.1,2.3,3.5,4.8,5.9];
var v=[ [1.1,0.9,1.2],
    [2.1,1.9,2.4],
    [2.9,3.2,3.7],
    [3.5,3.8,4.6],
    [4.8,5.8,6.9]];

var LR2 = jStat.zim.LinearRegression(t, v);
var predict = LR2.predict(50);
console.log('%c[JStat.zim]LinearRegression Predict: ' + predict, 'background: #FFFF60; color: #0000FF');