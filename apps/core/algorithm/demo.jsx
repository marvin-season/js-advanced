const CountDown = ({ init = 3 }) => {
  const [time, setTime] = useState(init);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 0) {
          clearInterval(timer);
        }

        return prev - 1;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [init]);

  return (
    <>
      {
        time <= 0 ? "Time’s up!" : time
      }
    </>
  );
};