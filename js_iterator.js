/*
var i = 0;
while(i < 10)
{
    document.write("Coding everybody <br>");
    i++;
}
*/

document.write("<br>");

for(var i = 0; i < 5; i++)
{
    /*
    if(i === 2)
    {
        continue;
    }
    if(i === 3)
    {
        break;
    }
    */
   for(var j = 0; j < 5; j++)
   {
      document.write("Coding everybody" + i + " " + j + '<br>');
   }
}