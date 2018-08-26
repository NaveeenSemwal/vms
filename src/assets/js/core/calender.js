
// calender view for Dialy-Diary

let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


var calendarSetup = function (month) {

    // Explain short circuiting.
    let currentDate = new Date();
    month == null && (month = currentDate.getMonth());

    // Remove all existing rows.
    $('.week').each(function () { $(this).remove(); })


    // Set the little arrow keys.
    switch (month) {

        case 0:
            // No month before January.
            $('#prev').attr('disabled', true);
            break;

        case 11:
            // No month after December.
            $('#next').attr('disabled', true);
            break;

        default:
            $('#prev').attr('disabled', false);
            $('#next').attr('disabled', false);
            break;

    }

    let firstDayOfMonth  = new Date(2018, month, 1).getDay();
    let totalDaysInMonth = new Date(2018, month + 1, 0).getDate();


    // Create the first week.
    let calendarWeek = $('<tr></tr>');
    calendarWeek.addClass('week');
    
    // Add empty <td> for non existing days.
    for (let i = 0; i < firstDayOfMonth; ++i) {
        emptyDay = $('<td></td>');              // Create new data for row.
        calendarWeek.append(emptyDay);          // alt: prepend, after, before.
    }


    // Start adding all the actual days.
    let dayCount = firstDayOfMonth;
    for (let i = 1; i <= totalDaysInMonth; ++i) {

        // Create a new <td> for the current date.
        calendarDate = $('<td></td>')
        calendarDate.attr('id', 'day' + i);
        calendarDate.text(i);
        calendarWeek.append(calendarDate);

        dayCount++;

        // If the week is over, add the row to calendar and reset the week.
        if (dayCount == 7) {
            $('#calendar').append(calendarWeek);
            calendarWeek = $('<tr></tr>');
            calendarWeek.addClass('week');
            dayCount = 0;
        }
    
    }


    // Add empty <td> for non existing days.
    for (; dayCount < 7; dayCount++) {
        emptyDay = $('<td></td>');
        calendarWeek.append(emptyDay);
    }

    // Append the last week to calendar.
    $('#calendar').append(calendarWeek);

    // If the calendar shows the current month, display date.
    if (currentDate.getMonth() == month) {
        // Changing the class for current date.
        $('#day' + currentDate.getDate()).addClass('current-date');
    }

    $('#month').text(monthNames[month]);

}


/**
 *  Function to move to the previous month.
 */
var prevMonth = function () {
    let month = $('#month').text();
    calendarSetup(monthNames.indexOf(month)-1);
}

/**
 *  Function to move to the next month.
 */
var nextMonth = function () {
    let month = $('#month').text();
    calendarSetup(monthNames.indexOf(month)+1);
}


$(document).ready(function () {
    calendarSetup();
});