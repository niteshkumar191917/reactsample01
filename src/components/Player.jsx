import { useState } from "react";

function Player({ initialName, symbol, isActive, onSaveChange }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function hanleEditClick() {
        setIsEditing(editing => !editing);
        if (isEditing) {
            onSaveChange(symbol, playerName);
        }
    }

    const handleInputChange = (e) => {
        setPlayerName(e.target.value);
    };

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let buttonCaption = 'Edit';
    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleInputChange} required />
        buttonCaption = 'Save';
    }
    
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={hanleEditClick}>{buttonCaption}</button>
        </li>
    );
}
export default Player;