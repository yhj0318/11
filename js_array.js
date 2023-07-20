var member = ['egoing', 'gudwns', 'sorialgi']
alert(member[0]);
alert(member[1]);
alert(member[2]);
document.write(member[0] + "<br>" +  member[1] + "<br>" + member[2] + "<br>");

function get_number()
{
    return [1, 2, 3];
}
var number = get_number();
document.write(number[0] + "<br>" + number[1] + "<br>" + number[2] + "<br>");

document.write("length = " + number.length + "<br>");
for(var i = 0; i< number.length; i++)
{
    document.write(i + "st : " + number[i] + "<br>");
}

function get_name()
{
    return ['HyeongJun'];
}
name = get_name();
for(var i = 0; i< name.length; i++)
{
    document.write(name[i].toUpperCase());
}

var li = ['a', 'b', 'c'];
li.push('d');
/* 여러가지 넣을때 사용 */
// li = li.concat('e', 'f');
document.write("<br>" + li);

/* 배열 맨앞 원소에 삽입 */
li.unshift('z');
document.write("<br>" + li);

/* 특정 위치에 원소 삽입 */
li.splice(2, 0, 'B');
document.write("<br>" + li);

/* 맨앞 원소 삭제 */
li.shift();
document.write("<br>" + li);

/* 맨뒤 원소 삭제 */
li.pop();
document.write("<br>" + li);

/* 오름차순으로 정렬 */
li.sort();
document.write("<br>" + li);

/* 내림차순으로 정렬 */
li.reverse();
document.write("<br>" + li);

