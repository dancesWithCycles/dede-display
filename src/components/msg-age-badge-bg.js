const MsgAgeBadgeBg = (age) => {
    /*minute in milliseconds*/
    const minute = 60000;

    /*five minutes in milliseconds*/
    const fiveMinutes = minute * 5;

    /*hour in milliseconds*/
    const hour = minute * 60;

    if (age <= fiveMinutes) {
        return 'success';
    } else if (age > minute && age <= hour) {
        return 'warning';
    } else {
        return 'danger';
    }
};
export default MsgAgeBadgeBg;
