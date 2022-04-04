//Enums

enum Week{
    Mon,
    Tue, 
    Wed,
    Thur,
    Fri,
    Sat,
    Sun
}

function weekend(week: Week) {
    let isweekend: boolean;
    switch(week) {
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