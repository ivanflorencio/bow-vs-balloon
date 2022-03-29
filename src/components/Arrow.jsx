import { useEffect, useState } from "react";
import arrow from "./img/arrow.svg";
export default function Arrow({ info }) {
    const [position, setPosition] = useState(0);
    useEffect(() => {
        let tick = setInterval(() => {
            setPosition((position) => {
                if (position > 1500) clearInterval(tick);
                return position + 1;
            });
        }, 5);
        return () => clearInterval(tick);
    }, []);
    return <img src={arrow} alt="" style={{ position: "absolute", left: position, top: info.position, width: "90px" }} />;
}
