export const formatHours = (hours) => {
    if(hours >=0 && hours <= 9){
        return '0' + hours;
    }
    else {
        return hours
    }
};