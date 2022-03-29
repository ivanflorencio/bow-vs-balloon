import Bow from "./Bow";

import "./BowVsBalloon.css";
import { useEffect, useState } from "react";
import Arrow from "./Arrow";
import Balloon from "./Balloon";
export default function BowVsBalloon() {
    const [arrows, setArrows] = useState([]);
    const [balloons, setBalloons] = useState([]);
    function shoot(bowPosition) {
        setArrows((arrows) => [...arrows, { position: bowPosition + 80 }]);
    }
    useEffect(() => {
        setBalloons([
            { position: 600 } /*, { position: 700 }, { position: 800 }, { position: 900 }, { position: 1000 }, { position: 1100 }, { position: 1200 }, { position: 1300 }*/,
        ]);
    }, []);
    function updateBalloonPosition(info, newPosition) {}
    return (
        <div className="game-container">
            <aside className="character-field">
                <Bow onShoot={(bowPosition) => shoot(bowPosition)} />
            </aside>
            <div className="balloon-field">
                {arrows.map((info, index) => (
                    <Arrow info={info} key={index} />
                ))}
                {balloons.map((info, index) => (
                    <Balloon info={info} key={index} updatePosition={(info, newPosition) => updateBalloonPosition(info, newPosition)} />
                ))}
            </div>
        </div>
    );
}
