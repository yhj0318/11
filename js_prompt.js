/* prompt 입력창 */
id = prompt('아이디를 입력해주세요.');
password = prompt('비밀번호를 입력해주세요.');
if(id == 'gudwns0318')
{
    if(password == "000318")
    {
        alert(id + "님 반갑습니다.");
    }
    else
    {
        alert("비밀번호가 틀립니다.");
    }
}
else
{
    alert("아이디가 틀립니다.");
}