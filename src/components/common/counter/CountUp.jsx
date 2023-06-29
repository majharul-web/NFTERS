import { useCountUp } from "react-countup";




const CountUp = ({ end }) => {
    useCountUp({ ref: 'counter', end: `${Number(end)}` });
    return <span id="counter" />;
};
export default CountUp;