a = " Crazy";
b = " Amazing";
c = "Fire";
index = Math.floor(Math.random() * 3);

if (index == 0) result1 = a;
if (index == 1) result1 = b;
if (index == 2) result1 = c;




d = "Engine";
e = "Foods";
f = "Garments";

index = Math.floor(Math.random() * 3);

if (index == 0) result2 = d;
if (index == 1) result2 = e;
if (index == 2) result2 = f;




g = "Bros";
h = "Limited";
i = "Hub";
index = Math.floor(Math.random() * 3);

if (index == 0) result3 = g;
if (index == 1) result3 = h;
if (index == 2) result3 = i;


console.log("Your Business name is :", result1, result2, result3.replace(/\s+/g, ''));
