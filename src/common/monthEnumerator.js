const monthKey = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var todayDate = new Date();

var getMonthArray = (todayMonth) => {
  var arr = new Array();
  for (let i = 0; i <= todayMonth; i++){
    arr.push(monthKey[i]);
  }

  return arr;
}

var retMonthArray = () => {
  return getMonthArray(todayDate.getMonth());
}

export default retMonthArray;