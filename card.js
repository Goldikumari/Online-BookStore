
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
let tColorA = document.getElementById('tColorA'),
tColorB = document.getElementById('tColorB'),
tColorC = document.getElementById('tColorC'),
iconA = document.querySelector('.fa-credit-card'),
iconB = document.querySelector('.fa-building-columns'),
iconC = document.querySelector('.fa-wallet'),
cDetails = document.querySelector('.card-details');


function doFun(){
tColorA.style.color = "greenyellow";
tColorB.style.color = "#444";
tColorC.style.color = "#444";
iconA.style.color = "greenyellow";
iconB.style.color = "#aaa";
iconC.style.color = "#aaa";
cDetails.style.display = "block";
}
function doFunA(){
tColorA.style.color = "#444";
tColorB.style.color = "greenyellow";
tColorC.style.color = "#444";
iconA.style.color = "#aaa";
iconB.style.color = "greenyellow";
iconC.style.color = "#aaa";
cDetails.style.display = "none";
}
function doFunB(){
tColorA.style.color = "#444";
tColorB.style.color = "#444";
tColorC.style.color = "greenyellow";
iconA.style.color = "#aaa";
iconB.style.color = "#aaa";
iconC.style.color = "greenyellow";
cDetails.style.display = "none";
}
let cNumber = document.getElementById('number');
cNumber.addEventListener('keyup', function(e){
let num = cNumber.value;

let newValue = '';
num = num.replace(/\s/g, '');
for(var i = 0; i < num.length; i++) {
 if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
 newValue = newValue.concat(num[i]);
 cNumber.value = newValue;
}

let ccNum = document.getElementById('c-number');
if(num.length<16){
 ccNum.style.border="1px solid red";
}else{
 ccNum.style.border="1px solid greenyellow";
}
});

let eDate = document.getElementById('e-date');
eDate.addEventListener('keyup', function( e ){

let newInput = eDate.value;

if(e.which !== 8) {
 var numChars = e.target.value.length;
 if(numChars == 2){
  var thisVal = e.target.value;
  thisVal += '/';
  e.target.value = thisVal;
  console.log(thisVal.length)
 }
}

if(newInput.length<5){
 eDate.style.border="1px solid red";
}else{
 eDate.style.border="1px solid greenyellow";
}
});

let cvv = document.getElementById('cvv');
cvv.addEventListener('keyup', function(e){

let elen = cvv.value;
let cvvBox = document.getElementById('cvv-box');
if(elen.length<3){
 cvvBox.style.border="1px solid red";
}else{
 cvvBox.style.border="1px solid greenyellow";
}
})