let date: Date = new Date();
let map: Map<number, string> = new Map();
const dateHour: number = date.getHours();
map.set(0, "Sunday");
map.set(1, "Monday");
map.set(2, "Tuesday");
map.set(3, "Wednesday");
map.set(4, "Thursday");
map.set(5, "Friday");
map.set(6, "Saturday");
let monthNames: string[] = [
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
    "December",
];
interface task {
    TODO: string;
    DOING: string;
    DONE: string;
}
const Task: task = {
    TODO: "todo",
    DOING: "doing",
    DONE: "done",
};
export { date, map, monthNames, dateHour, Task };
