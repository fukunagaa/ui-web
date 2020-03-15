export default (month) => {
  let ret = 1;
    if(month >= 1 && month <= 3 ){
      ret = 1;
    } else if(month > 3 && month <= 6){
      ret = 2;
    } else if(month > 6 && month <= 10 ){
      ret = 3;
    } else if(month > 10 && month <= 12){
      ret = 4;
    } else {
      ret = 9;
    }
    return ret;
  };