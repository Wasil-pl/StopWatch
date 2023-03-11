import { useEffect, useState } from 'react'
import FormatTime from '../FormatTime/FormatTime';
import Button from '../Button/Button';
import styles from './StopWatch.module.scss';

const StopWatch = () => {

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [timerOn])


  return (
    <div>
      <div className={styles.formatTime}>{FormatTime(time)}</div>
      <Button action={() => setTimerOn(true)}>Start</Button>
      <Button action={() => setTimerOn(false)}>Stop</Button>
      <Button action={() => setTime(0)}>Reset</Button>
    </div>
  )
}

export default StopWatch;