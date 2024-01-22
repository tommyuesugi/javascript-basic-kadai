const dateName = new Date();

const year = dateName.getFullYear();
const month = dateName.getMonth()+1;
const date = dateName.getDate();


console.log(year + '年' + month + '月' + date + '日')
