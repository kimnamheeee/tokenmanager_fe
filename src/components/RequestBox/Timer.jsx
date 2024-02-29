import "./Index.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = () => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={20}
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
