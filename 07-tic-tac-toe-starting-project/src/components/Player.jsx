import { useState } from "react";

export default function Player({ initialName, symbol, isActive }) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function changeState() {
        setIsEditing((editing) => !editing);
    }

    function initialNameChange(event) {
        setPlayerName(event.target.value);
    }

    let playerNameInput = <span className="player-name">{playerName}</span>;

    {
        isEditing && (
            playerNameInput = <input type="text" required value={playerName} onChange={initialNameChange}/>
        )
    }

    return (
        <li className={ isActive ? 'active' : undefined }>
            <span className="player">
                {playerNameInput}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={changeState}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}