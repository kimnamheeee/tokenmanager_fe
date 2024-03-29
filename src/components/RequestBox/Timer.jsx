import "./Index.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ remainingTime, initialRemainingTime }) => {
  console.log(remainingTime);
  return (
    <CountdownCircleTimer
      isPlaying
      duration={remainingTime}
      initialRemainingTime={initialRemainingTime}
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
      colorsTime={[7, 5, 2, 0]}
      size={38}
      strokeWidth={5}
    >
      {(number) => ""}
    </CountdownCircleTimer>
  );
};

export default Timer;
