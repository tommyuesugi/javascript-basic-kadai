const dateName = new Date([2022, 8, 22]);

const year = dateName.getFullYear();
const month = dateName.getMonth()+1;
const day = dateName.getDate();


console.log(year + '年' + month + '月' + day + '日')