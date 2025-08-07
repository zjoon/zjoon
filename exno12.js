a = " red";
b = " yellow";
c = "green";
d = " red";
e = " pink";
f = "grey";
index = Math.floor(Math.random() * 6);

if (index == 0) result1 = a;
if (index == 1) result1 = b;
if (index == 2) result1 = c;
if (index == 3) result1 = d;
if (index == 4) result1 = e;
if (index == 5) result1 = f;


h = "brown";
i = "blue";
j = "purple";
k = "brown";
l = "blue";
m = "purple";

index = Math.floor(Math.random() * 6);

if (index == 0) result2 = h;
if (index == 1) result2 = i;
if (index == 2) result2 = j;
if (index == 3) result2 = k;
if (index == 4) result2 = l;
if (index == 5) result2 = m;




document.querySelectorAll(".box").forEach(e => {
   e.style.backgroundColor = result1;
   e.style.color = result2;
})
