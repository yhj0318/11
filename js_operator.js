alert(1==2); /* false */
alert(1==1); /* true */
alert("one" == "two"); /* false */
alert("one" == "one"); /* true */
/* 동등연산자 == 는 정보가 동일한지 아닌지로 판단 */
alert(1=='1'); /* true */
/* 일치연산자 === 는 자료형이 동일한지 아닌지를 판단*/
alert(1==='1'); /* false */

alert("null === operator");
var a;
alert(a); /* undefined */
var a = null;
alert(a); /* null */
alert(undefined == null); /* true */
alert(undefined === null); /* false*/