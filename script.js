
window.onload=function startCalendar() {
    var d = new Date();
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth();
    month=month+countee;
    var year = d.getFullYear();
    var first_date = month_name[month] + " " + 1 + " " + year;
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year, month + 1, 0).getDate();
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    $('#calendar-dates').empty();
    document.getElementById("calendar-dates").appendChild(calendar);
}
function startCalendar(countee) {
	
    var d = new Date();
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = d.getMonth();
    month=month+countee;
    var add=parseInt(month/12);
    var year = d.getFullYear();
    if(month>=11)
    {
    	month=month%12;
        
    }
    if(month<=0)
    {
    	add--;
    	month=11+month%12;
    }
    year=year+add;
    var first_date = month_name[month] + " " + 1 + " " + year;
	
	
    var tmp = new Date(first_date).toDateString();
    var first_day = tmp.substring(0, 3);
    var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day_no = day_name.indexOf(first_day);
    var days = new Date(year, month + 1, 0).getDate();
    var calendar = get_calendar(day_no, days);
    document.getElementById("calendar-month-year").innerHTML = month_name[month] + " " + year;
    $('#calendar-dates').empty();
    document.getElementById("calendar-dates").appendChild(calendar);
}
var countee=0;
function buttonClickF() {
    countee=countee+1;
    startCalendar(countee);
    
}
function buttonClickB(){
	countee=countee-1;
    startCalendar(countee);
}


function get_calendar(day_no, days) {

    var table = document.createElement('table');
    //table.setAttribute('id','calendardata');
    var tr = document.createElement('tr');

    for (var c = 0; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = "SMTWTFS"[c];
        tr.appendChild(td);
    }
    table.appendChild(tr);

    
    tr = document.createElement('tr');
    var c 
    for (c = 0; c <= 6; c++) {
        if (c == day_no) {
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
    }

    var count = 1;
    for (; c <= 6; c++) {
        var td = document.createElement('td');
        td.innerHTML = count;
        count++;
        tr.appendChild(td);
     }
    table.appendChild(tr);


    for (var r = 3; r <= 7; r++) {
        tr = document.createElement('tr');
    for (var c = 0; c <= 6; c++) {
            if (count > days) {
                table.appendChild(tr);
                return table;
            }
            var td = document.createElement('td');
            td.innerHTML = count;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    return table;
}
