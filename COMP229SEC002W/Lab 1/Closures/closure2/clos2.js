function Alarm()
{
    const message="How are you?";


    function smallAlarm()
    {
        alert(message);
    }

    return smallAlarm
}
const child=Alarm();
child();
