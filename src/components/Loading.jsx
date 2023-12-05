import { useState, useEffect } from 'react'

const Loading = () => {
  const [progressValue, setProgressValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      // Increase the progress by 1 every 100ms
      setProgressValue((prevValue) => {
        if (prevValue < 100) {
          return prevValue + 1;
        }
        clearInterval(interval);
        return prevValue;
      });
    }, 20); // Adjust the interval as needed for smoother progress

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='nes-container darkmode-toggle is-dark loading'>
      <h1>NCNES</h1>
      <p>Powered by <br /><img src="./img/logo.png" alt='Company Logo' /> Giant</p>

    <progress className="nes-progress is-pattern" value={`${progressValue}`} max="100"></progress>

    </div>
  )
}

export default Loading
