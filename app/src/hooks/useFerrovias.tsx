const timesArrayWeekDayToRetiro = [
    "04:53",
    "05:15",
    "05:36",
    "05:52",
    "06:08",
    "06:24",
    "06:40",
    "06:56",
    "07:12",
    "07:28",
    "07:44",
    "08:00",
    "08:16",
    "08:32",
    "08:48",
    "09:04",
    "09:20",
    "09:36",
    "09:52",
    "10:17",
    "10:42",
    "11:07",
    "11:32",
    "11:57",
    "12:22",
    "12:47",
    "13:12",
    "13:37",
    "14:02",
    "14:27",
    "14:52",
    "15:17",
    "15:42",
    "16:07",
    "16:32",
    "16:57",
    "17:22",
    "17:47",
    "18:13",
    "18:28",
    "18:45",
    "19:00",
    "19:17",
    "19:33",
    "19:58",
    "20:23",
    "20:48",
    "21:13",
    "21:38",
    "22:03",
    "22:28",
    "22:53",
    "23:18"
];

const timesArraySaturdayToRetiro = [
    "04:33",
    "04:58",
    "05:24",
    "05:50",
    "06:08",
    "06:27",
    "06:45",
    "07:03",
    "07:21",
    "07:39",
    "07:58",
    "08:15",
    "08:33",
    "08:51",
    "09:09",
    "09:27",
    "09:43",
    "10:03",
    "10:28",
    "10:53",
    "11:18",
    "11:43",
    "12:08",
    "12:33",
    "12:58",
    "13:23",
    "13:48",
    "14:13",
    "14:38",
    "15:03",
    "15:28",
    "15:53",
    "16:18",
    "16:43",
    "17:08",
    "17:33",
    "17:58",
    "18:23",
    "18:48",
    "19:13",
    "19:38",
    "20:03",
    "20:28",
    "20:53",
    "21:18",
    "21:43",
    "22:08",
    "22:33",
    "23:18"
];

const timesArraySundayToRetiro = [
    "04:46",
    "05:28",
    "06:11",
    "06:54",
    "07:37",
    "08:20",
    "09:03",
    "09:46",
    "10:29",
    "11:12",
    "11:55",
    "12:38",
    "13:21",
    "14:04",
    "14:47",
    "15:30",
    "16:13",
    "16:56",
    "17:39",
    "18:22",
    "19:05",
    "19:48",
    "20:31",
    "21:14",
    "21:57",
    "23:18"
];

const timesArrayWeekDayToPadilla = [
    "05:23",
    "05:48",
    "06:07",
    "06:25",
    "06:41",
    "06:57",
    "07:13",
    "07:30",
    "07:55",
    "08:20",
    "08:45",
    "09:10",
    "09:35",
    "10:00",
    "10:25",
    "10:50",
    "11:15",
    "11:40",
    "12:05",
    "12:30",
    "12:55",
    "13:20",
    "13:45",
    "14:10",
    "14:35",
    "15:00",
    "15:25",
    "15:50",
    "16:06",
    "16:22",
    "16:38",
    "16:54",
    "17:10",
    "17:26",
    "17:42",
    "17:58",
    "18:14",
    "18:30",
    "18:46",
    "19:02",
    "19:18",
    "19:34",
    "19:50",
    "20:10",
    "20:30",
    "20:55",
    "21:20",
    "21:45",
    "22:10",
    "22:35",
    "23:00",
    "23:25",
    "23:50"
];

const timesArraySaturdayToPadilla = [
    "05:03",
    "05:30",
    "05:55",
    "06:20",
    "06:45",
    "07:10",
    "07:35",
    "08:00",
    "08:25",
    "08:50",
    "09:15",
    "09:40",
    "10:05",
    "10:30",
    "10:55",
    "11:20",
    "11:45",
    "12:10",
    "12:35",
    "13:00",
    "13:25",
    "13:50",
    "14:08",
    "14:26",
    "14:44",
    "15:02",
    "15:20",
    "15:38",
    "15:56",
    "16:14",
    "16:32",
    "16:50",
    "17:10",
    "17:35",
    "18:00",
    "18:25",
    "18:50",
    "19:15",
    "19:40",
    "20:05",
    "20:25",
    "20:50",
    "21:15",
    "21:40",
    "22:10",
    "22:35",
    "23:00",
    "23:25",
    "23:50"
];

const timesArraySundayToPadilla = [
    "05:27",
    "06:10",
    "06:53",
    "07:36",
    "08:19",
    "09:02",
    "09:45",
    "10:28",
    "11:11",
    "11:54",
    "12:37",
    "13:20",
    "14:03",
    "14:46",
    "15:29",
    "16:12",
    "16:55",
    "17:38",
    "18:16",
    "19:04",
    "19:48",
    "20:25",
    "21:15",
    "22:10",
    "23:01",
    "23:50"
];



function findClosestTime(currentTime, timesArray) {
    // Function to convert HH:mm time format to minutes since midnight
    function timeToMinutes(time) {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    }

    // Convert current time to minutes since midnight
    const currentMinutes = timeToMinutes(currentTime);

    // Convert times array to minutes since midnight
    const timesInMinutes = timesArray.map(timeToMinutes);

    // Filter out times that have already passed
    const futureTimes = timesInMinutes.filter(time => time > currentMinutes);

    if(futureTimes.length === 0)
        return null;

    const closestTime = Math.min(...futureTimes)

    // Convert closest time back to 'HH:mm' format
    const closestHours = Math.floor(closestTime / 60);
    const closestMinutes = closestTime % 60;
    //const closestTimeString = `${String(closestHours).padStart(2, '0')}:${String(closestMinutes).padStart(2, '0')}`;

    return `${String(closestHours).padStart(2, '0')}:${String(closestMinutes).padStart(2, '0')}`;
}

const getCurrentTime = () => {

    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
};

export const nextToRetiro = () => {
    return {
        weekDay: findClosestTime(getCurrentTime(), timesArrayWeekDayToRetiro),
        saturday: findClosestTime(getCurrentTime(), timesArraySaturdayToRetiro),
        sunday: findClosestTime(getCurrentTime(), timesArraySundayToRetiro)
    };
}
export const nextToPadilla = () => {
    return {
        weekDay: findClosestTime(getCurrentTime(), timesArrayWeekDayToPadilla),
        saturday: findClosestTime(getCurrentTime(), timesArraySaturdayToPadilla),
        sunday: findClosestTime(getCurrentTime(), timesArraySundayToPadilla)
    };
}

