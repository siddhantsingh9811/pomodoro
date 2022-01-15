import { useEffect, useState } from "react";

const Timer = ({timeLeft,controls,state,config,handleNext,pauseState,setOpen}) => {
    const {p, setP} = pauseState;
    const isActive = timeLeft > 0;
    const [time,setTime] = useState({minutes:0,seconds:0});
    let c = 0;
    useEffect(()=>{
        let s =  Math.floor((timeLeft % (1000 * 60)) / 1000);
        let m = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))*60+Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        setTime({minutes:m, seconds:s});
        if(!isActive){
            console.log("ended")
            handleNext();
        }
    },[timeLeft]);
    const lap = ()=>{
        switch (state.mode) {
            case "study":
                return <div className="lap">Lap {state.count}</div>;
            case "b1":
                return <div className="lap">Short Break</div>;
            case "b2":
                return <div className="lap">Long Break</div>
            default:
                break;
        }
    }
    const handlePref = ()=>{
        setOpen(true);
    }
    return ( 
        
        <div className="timer">   
            {lap()}
           
            <div className="time">
                {time.minutes < 10 ? `0${time.minutes}`: time.minutes}:{time.seconds < 10 ? `0${time.seconds}` : time.seconds}
            </div>
            <div className="buttons">
            
                <svg className="menu b" onClick={handlePref} preserveAspectRatio viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.07031 21.9993C4.42234 21.9993 3.07031 23.3514 3.07031 24.9993C3.07031 26.6473 4.42234 27.9993 6.07031 27.9993C7.71828 27.9993 9.07031 26.6473 9.07031 24.9993C9.07031 23.3514 7.71828 21.9993 6.07031 21.9993ZM6.07031 23.4993C6.90762 23.4993 7.57031 24.162 7.57031 24.9993C7.57031 25.8366 6.90762 26.4993 6.07031 26.4993C5.233 26.4993 4.57031 25.8366 4.57031 24.9993C4.57031 24.162 5.233 23.4993 6.07031 23.4993Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.168 8.24934C14.0686 8.24794 13.9699 8.2663 13.8777 8.30336C13.7855 8.34042 13.7015 8.39544 13.6307 8.46522C13.56 8.53501 13.5038 8.61816 13.4654 8.70985C13.427 8.80155 13.4073 8.89995 13.4073 8.99934C13.4073 9.09874 13.427 9.19714 13.4654 9.28883C13.5038 9.38053 13.56 9.46368 13.6307 9.53346C13.7015 9.60324 13.7855 9.65827 13.8777 9.69533C13.9699 9.73239 14.0686 9.75075 14.168 9.74934H46.168C46.2673 9.75075 46.366 9.73239 46.4582 9.69533C46.5505 9.65827 46.6344 9.60324 46.7052 9.53346C46.776 9.46368 46.8322 9.38053 46.8705 9.28883C46.9089 9.19714 46.9286 9.09874 46.9286 8.99934C46.9286 8.89995 46.9089 8.80155 46.8705 8.70985C46.8322 8.61816 46.776 8.53501 46.7052 8.46522C46.6344 8.39544 46.5505 8.34042 46.4582 8.30336C46.366 8.2663 46.2673 8.24794 46.168 8.24934H14.168ZM14.168 24.2493C14.0686 24.2479 13.9699 24.2662 13.8777 24.3033C13.7855 24.3404 13.7015 24.3954 13.6307 24.4652C13.56 24.5349 13.5038 24.6181 13.4654 24.7098C13.427 24.8015 13.4073 24.9 13.4073 24.9993C13.4073 25.0987 13.427 25.1971 13.4654 25.2888C13.5038 25.3805 13.56 25.4636 13.6307 25.5334C13.7015 25.6032 13.7855 25.6582 13.8777 25.6953C13.9699 25.7323 14.0686 25.7507 14.168 25.7493H46.168C46.2673 25.7507 46.366 25.7323 46.4582 25.6953C46.5505 25.6582 46.6344 25.6032 46.7052 25.5334C46.776 25.4636 46.8322 25.3805 46.8705 25.2888C46.9089 25.1971 46.9286 25.0987 46.9286 24.9993C46.9286 24.9 46.9089 24.8015 46.8705 24.7098C46.8322 24.6181 46.776 24.5349 46.7052 24.4652C46.6344 24.3954 46.5505 24.3404 46.4582 24.3033C46.366 24.2662 46.2673 24.2479 46.168 24.2493H14.168ZM14.168 40.2493C14.0686 40.2479 13.9699 40.2662 13.8777 40.3033C13.7855 40.3404 13.7015 40.3954 13.6307 40.4652C13.56 40.535 13.5038 40.6181 13.4654 40.7098C13.427 40.8015 13.4073 40.9 13.4073 40.9993C13.4073 41.0987 13.427 41.1971 13.4654 41.2888C13.5038 41.3805 13.56 41.4636 13.6307 41.5334C13.7015 41.6032 13.7855 41.6582 13.8777 41.6953C13.9699 41.7323 14.0686 41.7508 14.168 41.7493H46.168C46.2673 41.7508 46.366 41.7323 46.4582 41.6953C46.5505 41.6582 46.6344 41.6032 46.7052 41.5334C46.776 41.4636 46.8322 41.3805 46.8705 41.2888C46.9089 41.1971 46.9286 41.0987 46.9286 40.9993C46.9286 40.9 46.9089 40.8015 46.8705 40.7098C46.8322 40.6181 46.776 40.535 46.7052 40.4652C46.6344 40.3954 46.5505 40.3404 46.4582 40.3033C46.366 40.2662 46.2673 40.2479 46.168 40.2493H14.168Z" fill="white"/>
                    <path d="M6.07031 37.9993C4.42234 37.9993 3.07031 39.3514 3.07031 40.9993C3.07031 42.6473 4.42234 43.9993 6.07031 43.9993C7.71828 43.9993 9.07031 42.6473 9.07031 40.9993C9.07031 39.3514 7.71828 37.9993 6.07031 37.9993ZM6.07031 39.4993C6.90762 39.4993 7.57031 40.162 7.57031 40.9993C7.57031 41.8366 6.90762 42.4993 6.07031 42.4993C5.233 42.4993 4.57031 41.8366 4.57031 40.9993C4.57031 40.162 5.233 39.4993 6.07031 39.4993ZM6.07031 5.99933C4.42234 5.99933 3.07031 7.35143 3.07031 8.99933C3.07031 10.6473 4.42234 11.9993 6.07031 11.9993C7.71828 11.9993 9.07031 10.6473 9.07031 8.99933C9.07031 7.35143 7.71828 5.99933 6.07031 5.99933ZM6.07031 7.49933C6.90762 7.49933 7.57031 8.16203 7.57031 8.99933C7.57031 9.83663 6.90762 10.4993 6.07031 10.4993C5.233 10.4993 4.57031 9.83663 4.57031 8.99933C4.57031 8.16203 5.233 7.49933 6.07031 7.49933Z" fill="white"/>
                </svg>
                {p ? 
                <svg className="play b" onClick={()=> {setP(false); controls.resume();}} preserveAspectRatio viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.87067 9.07635C9.65751 9.08415 9.45565 9.17418 9.30744 9.32758C9.15923 9.48099 9.0762 9.68583 9.07575 9.89913V45.0991C9.0757 45.2396 9.11154 45.3778 9.17986 45.5006C9.24818 45.6234 9.34672 45.7267 9.46614 45.8007C9.58557 45.8748 9.72191 45.917 9.86226 45.9236C10.0026 45.9302 10.1423 45.9007 10.2681 45.8382L45.4681 28.2382C45.6052 28.1697 45.7205 28.0644 45.801 27.9341C45.8816 27.8037 45.9243 27.6534 45.9243 27.5002C45.9243 27.347 45.8816 27.1968 45.801 27.0665C45.7205 26.9361 45.6052 26.8307 45.4681 26.7622L10.2681 9.16222C10.1449 9.10091 10.0082 9.07141 9.87067 9.07642V9.07635ZM10.7257 11.2355L43.2552 27.4991L10.7257 43.7651V11.2355Z" fill="white"/>
                </svg>:
                
                <svg className="pause b" onClick={()=> {setP(true); controls.pause();}} preserveAspectRatio viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.9883 8.23965C16.7897 8.24276 16.6005 8.32448 16.4621 8.46689C16.3237 8.6093 16.2474 8.80079 16.25 8.99936V40.9994C16.2486 41.0987 16.267 41.1974 16.304 41.2896C16.3411 41.3819 16.3961 41.4658 16.4659 41.5366C16.5357 41.6074 16.6188 41.6635 16.7105 41.7019C16.8022 41.7402 16.9006 41.76 17 41.76C17.0994 41.76 17.1978 41.7402 17.2895 41.7019C17.3812 41.6635 17.4643 41.6074 17.5341 41.5366C17.6039 41.4658 17.6589 41.3819 17.696 41.2896C17.733 41.1974 17.7514 41.0987 17.75 40.9994V8.99936C17.7513 8.89906 17.7325 8.79953 17.6946 8.70663C17.6568 8.61374 17.6007 8.52936 17.5297 8.45853C17.4586 8.38769 17.3741 8.33182 17.2811 8.29422C17.1882 8.25662 17.0886 8.23809 16.9883 8.23965V8.23965ZM32.9883 8.23965C32.7897 8.24276 32.6005 8.32448 32.4621 8.46689C32.3237 8.6093 32.2474 8.80079 32.25 8.99936V40.9994C32.2486 41.0987 32.267 41.1974 32.304 41.2896C32.3411 41.3819 32.3961 41.4658 32.4659 41.5366C32.5357 41.6074 32.6188 41.6635 32.7105 41.7019C32.8022 41.7402 32.9006 41.76 33 41.76C33.0994 41.76 33.1978 41.7402 33.2895 41.7019C33.3812 41.6635 33.4643 41.6074 33.5341 41.5366C33.6039 41.4658 33.6589 41.3819 33.696 41.2896C33.733 41.1974 33.7514 41.0987 33.75 40.9994V8.99936C33.7513 8.89906 33.7325 8.79953 33.6946 8.70663C33.6568 8.61374 33.6007 8.52936 33.5297 8.45853C33.4586 8.38769 33.3741 8.33182 33.2811 8.29422C33.1882 8.25662 33.0886 8.23809 32.9883 8.23965V8.23965Z" fill="white"/>
                </svg>
                }
                <svg onClick={()=>{handleNext()}} className="next b" preserveAspectRatio viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.08926 9.07643C0.87271 9.07927 0.66596 9.16715 0.513624 9.32109C0.361288 9.47502 0.275582 9.68272 0.275002 9.89928V45.0993C0.274839 45.2487 0.315246 45.3952 0.391909 45.5235C0.468572 45.6517 0.578615 45.7568 0.710293 45.8273C0.841972 45.8979 0.990343 45.9314 1.13957 45.9243C1.2888 45.9171 1.43329 45.8696 1.55762 45.7868L27.9576 28.1868C28.0706 28.1114 28.1632 28.0094 28.2273 27.8896C28.2913 27.7699 28.3249 27.6362 28.3249 27.5004C28.3249 27.3646 28.2913 27.2308 28.2273 27.1111C28.1632 26.9914 28.0706 26.8893 27.9576 26.8139L1.55762 9.21393C1.41894 9.12191 1.25567 9.07398 1.08926 9.07643ZM1.925 11.4419L26.0133 27.5014L1.925 43.5589V11.4419Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M27.4893 9.07643C27.2727 9.07927 27.066 9.16715 26.9136 9.32109C26.7613 9.47502 26.6756 9.68272 26.675 9.89928V45.0993C26.6748 45.2487 26.7152 45.3952 26.7919 45.5235C26.8686 45.6517 26.9786 45.7568 27.1103 45.8273C27.242 45.8979 27.3903 45.9314 27.5396 45.9243C27.6888 45.9171 27.8333 45.8696 27.9576 45.7868L54.3576 28.1868C54.4706 28.1114 54.5632 28.0094 54.6273 27.8896C54.6913 27.7699 54.7249 27.6362 54.7249 27.5004C54.7249 27.3646 54.6913 27.2308 54.6273 27.1111C54.5632 26.9914 54.4706 26.8893 54.3576 26.8139L27.9576 9.21393C27.8189 9.12191 27.6557 9.07398 27.4893 9.07643ZM28.325 11.4419L52.4133 27.5014L28.325 43.5589V11.4419Z" fill="white"/>
                </svg>

                
            </div>
        </div>
     );
}
 
export default Timer;