import './ScoreBox.css'

function ScoreBox ({resetGameFcn, currentScore, maxScore=0}) {

    return (
        <>
        <button onClick={resetGameFcn}>Reset Game</button>
        <div className="scores">
            <table>
                <caption>Score board</caption>
                <tbody>
                    <tr>
                        <th>Current Score</th>
                        <td>{currentScore}</td>
                    </tr>
                    <tr>
                        <th>Max Score</th>
                        <td>{maxScore}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>

    )
}

export default ScoreBox;