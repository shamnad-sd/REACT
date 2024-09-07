import React,{useState , useEffect} from "react";

function DigitalClock (){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(new Date())
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }
    },[])

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridam = hours >= 12 ? "PM" : "AM";

        // if 13 % 12 =1 so that's the condition doing this area
        hours = hours % 12 || 12;

        return `${PadZero(hours)}:${PadZero(minutes)}:${PadZero(seconds)} ${meridam}`
    }

    function PadZero(number){
        return (number < 10 ?  "0" : " ")+number;
    }


    return(
    <div className="clock-container">
        <div className="clock">
        <span>{formatTime()}</span>
        </div>
    </div>
    )
}
export default DigitalClock ;