let jerusalem_time;
let london_time;
let tokyo_time;

function update(region, city)
{
    const targetTimezone = `${region}/${city}`;
    // Get the current date and time
    const currentDate = new Date();

    // Create a date formatter for the target timezone
    const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false, // Use 24-hour format
    timeZone: targetTimezone
    });

    // Format the current date and time
    const formattedTime = formatter.format(currentDate);

    // Extract hours, minutes, and seconds and store them in an array
    const [hours, minutes, seconds] = formattedTime.split(':').map(num => parseInt(num));
    const timeArray = [hours, minutes, seconds];

    console.log(timeArray);

    return timeArray;
}


setInterval(() => {

    jerusalem_time = update("Asia", "Jerusalem");

    const hour = document.getElementById("hour_jr");
    const minute = document.getElementById("minute_jr");
    const second = document.getElementById("second_jr");

    hr = jerusalem_time[0];
    min = jerusalem_time[1];
    sec = jerusalem_time[2];
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
 
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;

    document.getElementById("text_jr").innerHTML = `Jerusalem ${jerusalem_time[0]}:${jerusalem_time[1]}:${jerusalem_time[2]}`;
}, 1000);

setTimeout(() => {
    setInterval(() => {

        london_time = update("Europe", "London");
    
        const hour = document.getElementById("hour_ld");
        const minute = document.getElementById("minute_ld");
        const second = document.getElementById("second_ld");
    
        hr = london_time[0];
        min = london_time[1];
        sec = london_time[2];
        hr_rotation = 30 * hr + min / 2; //converting current time
        min_rotation = 6 * min;
        sec_rotation = 6 * sec;
     
        hour.style.transform = `rotate(${hr_rotation}deg)`;
        minute.style.transform = `rotate(${min_rotation}deg)`;
        second.style.transform = `rotate(${sec_rotation}deg)`;
    
        document.getElementById("text_ld").innerHTML = `London ${london_time[0]}:${london_time[1]}:${london_time[2]}`;
    }, 1000);
}, 1);

setTimeout(() => {
    setInterval(() => {

        tokyo_time = update("Asia", "Tokyo");
    
        const hour = document.getElementById("hour_tk");
        const minute = document.getElementById("minute_tk");
        const second = document.getElementById("second_tk");
    
        hr = tokyo_time[0];
        min = tokyo_time[1];
        sec = tokyo_time[2];
        hr_rotation = 30 * hr + min / 2; //converting current time
        min_rotation = 6 * min;
        sec_rotation = 6 * sec;
     
        hour.style.transform = `rotate(${hr_rotation}deg)`;
        minute.style.transform = `rotate(${min_rotation}deg)`;
        second.style.transform = `rotate(${sec_rotation}deg)`;
    
        document.getElementById("text_tk").innerHTML = `Tokyo ${tokyo_time[0]}:${tokyo_time[1]}:${tokyo_time[2]}`;
    }, 1000);
}, 2);