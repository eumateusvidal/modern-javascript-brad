let x;
let d = new Date();

x = d.toString();

x = d.getTime();

x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();

x = d.getDate();

x = d.getDay();

x = d.getHours();

x = `${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);

x = console.log(x);
