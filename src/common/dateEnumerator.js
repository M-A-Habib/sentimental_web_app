var todayDate = new Date();
var firstDay = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1);

var getDateArray = (startDate, endDate) => {
  var arr = new Array();
  var dt = new Date(startDate);
  while(dt <= endDate){
    arr.push(extractDate(new Date(dt)));
    dt.setDate(dt.getDate() + 1);
  }

  return arr;
}

var extractDate = (date) => {
  return (String(date.getMonth() + 1).padStart(2, '0')) + '-' +
  (String(date.getDate()).padStart(2, '0')) + '-' +
  (date.getFullYear());
}

var retArray = () => {
  return getDateArray(firstDay, todayDate);
}

export default retArray;