function showTime() {
        let d = new Date(); //create date object
        let hour = d.getHours(); //create hours
        let minute = d.getMinutes(); //create minutes
        let second = d.getSeconds(); //create seconds
        let date = d.getDate(); //create date of the month
        let day = d.getDay(); // create day of the week
        let month = d.getMonth() //create month
        let year = d.getFullYear(); //create year
        let meridian; //AM or PM;
        
          
        //Convert the clock to 12-hour format.
        hour < 12 ? (meridian = 'AM') : (meridian = 'PM');
        hour > 12 ? (hour = hour - 12) : undefined;
        
        /* Precede the hour, minute or second by an integer, 0
        (zero) if it is less than 10. E.g, 1:5:9 PM will display as 01:05:09 PM. */
        hour < 10 ? (hour = '0' + hour) : undefined;
        minute < 10 ? (minute = '0' + minute) : undefined;
        second < 10 ? (second = '0' + second) : undefined;
        
        /* Append 'st' to the date if it is 1, 21, or 31 so that 
        it displays as 1st, 21st, or 31st respectively.
        Also;
        Append 'nd' to the date when it's 2 or 22 accordingly, and;
        append 'rd' to the date when it's 3, or 23.
        Append 'th' to any date that doesn't meet the conditions above.*/
        if (date == (1 || 21 || 31)) {
          date = date + 'st';
        } else if (date == (2 || 22)) {
          date = date + 'nd';
        } else if (date == (3 || 23)) {
          date = date + 'rd';
        } else {
          date = date + 'th';
        }        
          
        /* Return the month of the year as a string, e.g 'January', instead of an integer, 0. */
        if (month == 0) {
          month = 'January';
        } else if (month == 1) {
          month = 'February';
        } else if (month == 2) {
          month = 'March';
        } else if (month == 3) {
          month = 'April';
        } else if (month == 4) {
          month = 'May';
        } else if (month == 5) {
          month = 'June';
        } else if (month == 6) {
          month = 'July';
        } else if (month == 7) {
          month = 'August';
        } else if (month == 8) {
          month = 'September';
        } else if (month == 9) {
          month = 'October';
        } else if (month == 10) {
          month = 'November';
        } else if (month == 11) {
          month = 'December';
        }
        
        /* Return a string indicating the day of the week (e.g Sunday instead of an integer, 0) */
        if (day == 6) {
          day = 'Saturday';
        } else if (day == 5) {
          day = 'Friday';
        } else if (day == 4) {
          day = 'Thursday';
        } else  if (day == 3) {
          day = 'Wednesday';
        } else if (day == 2) {
          day = 'Tuesday';
        } else if (day == 1) {
          day = 'Monday';
        } else if (day == 0) {
          day = 'Sunday';
        }
    
        /* Concatenate the hour, minute, and second elements
        and separate them with colons. */
        let time = `${hour}:${minute}:${second} ${meridian}`;
        
        /* Concatenate the day of the week, date, month, and the year elements while separating them with colons. */
        let today = `${day}, ${date} ${month} ${year}`;
          
        /* Select the HTML elements with the ids 'clock' and 'DATE', and output the data above accordingly. */
        document.querySelector('#clock').textContent = time;
        document.querySelector('#DATE').textContent = today;
        
        //execute this function every one second (1000 milliseconds)
          setInterval(showTime, 1000);
      }

      showTime()