/* 객체는 {}를 사용 key값 : value값 */
var grades = {'egoing': 10, 'k8805': 6, 'sorialgi': 80};

/* 객체 만드는 방법 2 */
var grades = {};
grades['egoing'] = 10;
grades['k8805'] = 6;
grades['sorialgi'] = 80;

/* 객체의 속성에 접근하는 방법1 */
document.write(grades['sorialgi'] + "<br>");

/* 객체의 속성에 접근하는 방법2 */
document.write(grades.k8805 + "<br>");

/* 객체의 속성에 접근하는 방법3 */
document.write(grades['k88' + '05'] + "<br>");

var arr = ['a', 'b', 'c'];
for(var i = 0; i < arr.length; i++)
{
    document.write(arr[i]);
}

document.write("<br>");

/* for in 문법 
li태그로 ul태그 적용*/
for(key in grades)
{
    document.write("<li>key : " + key + " value : " + grades[key] + "</li>");
}

/* 객체를 만드는 방법
list 객체, show 객체 */
var grades = {
    'list' : {'egoing' : 10, 'k8805' : 8, 'sorialgi' : 80},
    'show' : function()
    {
        for(var name in this.list)
        {
            document.write(name, this.list[name] + "<br>");
        }
    }
}

/* grades의 show 객체 호출 */
//grades['show']();
grades.show();