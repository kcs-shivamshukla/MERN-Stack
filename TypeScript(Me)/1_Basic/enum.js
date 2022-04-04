//Enums
var Week;
(function (Week) {
    Week[Week["Mon"] = 0] = "Mon";
    Week[Week["Tue"] = 1] = "Tue";
    Week[Week["Wed"] = 2] = "Wed";
    Week[Week["Thur"] = 3] = "Thur";
    Week[Week["Fri"] = 4] = "Fri";
    Week[Week["Sat"] = 5] = "Sat";
    Week[Week["Sun"] = 6] = "Sun";
})(Week || (Week = {}));
function weekend(week) {
    var isweekend;
    switch (week) {
        case Week.Sat:
        case Week.Sun:
            {
                isweekend = true;
                console.log("Enjoy Weekend");
                break;
            }
        default: {
            isweekend = false;
            console.log("Work Hard");
            break;
        }
    }
    return isweekend;
}
console.log(weekend(Week.Sat));
