var index=0;
function changeBgColor()
{
    var colors=["blue","yellow","red","green","orange","pink"];
    document.getElementsByTagName("body")[0].
    style.background=colors[index++];
    if(index > colors.length-1)
    {
           index=0;
    }
}