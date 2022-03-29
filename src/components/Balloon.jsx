import { useEffect, useState } from "react";
import balloon from "./img/balloon.svg";
import flattedBallon from "./img/flatted-balloon.svg";
export default function Balloon({ info, updatePosition }) {
    const [inflated, setInflated] = useState(true);
    const [position, setPosition] = useState(0);
    useEffect(() => {
        let tick = setInterval(() => {
            setPosition((position) => {
                if (position > 1600) return 0;
                updatePosition(info, position + 1);
                return position + 1;
            });
        }, 10);
        return () => clearInterval(tick);
    }, []);
    return inflated ? (
        <img src={balloon} alt="" style={{ position: "absolute", bottom: position, left: info.position, width: "90px" }} />
    ) : (
        <img src={flattedBallon} alt="" style={{ position: "absolute", bottom: position, left: info.position, width: "90px" }} />
    );
}
