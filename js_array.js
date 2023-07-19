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
