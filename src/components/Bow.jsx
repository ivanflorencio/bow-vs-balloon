import { useState } from "react";
import bowAndArrow from "./img/bow-and-arrow.svg";
import bow from "./img/bow.svg";
export default function Bow({ onShoot }) {
    const [status, setStatus] = useState("empty");
    const [bowPosition, setBowPosition] = useState(0);
    function load(e) {
        e.preventDefault();
        setStatus("loaded");
    }
    function release() {
        setStatus("empty");
        onShoot(bowPosition);
    }
    function move(e) {
        if (status === "loaded") setBowPosition(e.clientY - 80);
    }
    return (
        <div
            onMouseUp={() => release()}
            onMouseDown={(e) => load(e)}
            onMouseMove={(e) => move(e)}
            onContextMenu={(e) => e.preventDefault()}
            style={{ position: "absolute", top: bowPosition }}
        >
            {status === "empty" && <img src={bow} alt="" />}
            {status === "loaded" && <img src={bowAndArrow} alt="" />}
        </div>
    );
}
