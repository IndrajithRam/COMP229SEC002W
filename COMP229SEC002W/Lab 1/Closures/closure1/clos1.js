function parent()
{
    const message ="Be alert for the 'Alert'";


    function child()
    {
        alert(message);
    }

    child();
}

parent();
console.log('Alert should be displayed');