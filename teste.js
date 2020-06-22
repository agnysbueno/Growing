const moment = require('moment')
const momentTz = require('moment-timezone')
function stringToDate(_date,_format,_delimiter)
        {
            var formatLowerCase=_format.toLowerCase();
            var formatItems=formatLowerCase.split(_delimiter);
            var dateItems=_date.split(_delimiter);
            var monthIndex=formatItems.indexOf("mm");
            var dayIndex=formatItems.indexOf("dd");
            var yearIndex=formatItems.indexOf("yyyy");
            var month=parseInt(dateItems[monthIndex]);
            month-=1;
            var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
            return formatedDate;
        }
        function toDate(dStr,format) {
            var now = moment();
            if (format == "h:m") {
                 now.setHours(dStr.substr(0,dStr.indexOf(":")));
                 now.setMinutes(dStr.substr(dStr.indexOf(":")+1));
                 now.setSeconds(0);
                 return now;
            }else 
                return "Invalid Format";
        }

        let dateTrans1 = momentTz().tz('America/Sao_Paulo').format();
        // let horinic = momentTz("01:20", "hh:mm").tz('America/Sao_Paulo');
        // let horfin = momentTz("23:50", "hh:mm").tz('America/Sao_Paulo');
     
        let dateTrans = moment("31/01/2020", "DD/MM/YYYY").utcOffset(-60*3);
        // let horinic = moment(horainicial, "hh:mm");
        // let horfin = moment(horafinal, "hh:mm");

        console.log(typeof(dateTrans))
        console.log(dateTrans)

        console.log(typeof(dateTrans1))
        console.log(dateTrans1)



// console.log(horinic)
// console.log(horfin)

