function numbering()
{
    var i = 0;
    var sum = 0;
    while(i <= 10)
    {
        document.write(i);
        sum += i++;
    }
    /* return 출력 */
    return sum;
}

alert(numbering());

function get_argument(arg1, arg2)
{
    var sum = 0;
    sum = arg1 * arg2;
    return sum;
}

alert(get_argument(1, 2));
alert(get_argument(10, 20));

var get_number = function(num1, num2)
{
    var sum = 0;
    sum = num1 + num2;
    return sum;
}

alert(get_number(1, 2));
alert(get_number(10, 20));

/*
익명함수 1회성 함수이다
(function numbering()
{
    var i = 0;
    var sum = 0;
    while(i <= 10)
    {
        document.write(i);
        sum += i++;
    }
    return sum;
})();
*/