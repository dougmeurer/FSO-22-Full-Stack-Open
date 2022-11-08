import StatisticLine from "../StatisticLine"

function Statistics ({good, bad, neutral, total}) {

    const avr = ((-Math.abs(bad) + good) / total)
    const positive = good / total * 100

    if (total === 0) {
        return <p>No Feedback given</p>
    }

    return (
    <div>
    <table>
        <tbody>
            <StatisticLine text="Good" value={good}/>
            <StatisticLine text="Neutral" value={neutral}/>
            <StatisticLine text="Bad" value={bad}/>
            <StatisticLine text="Total" value={total}/>
            <StatisticLine text="Average" value={avr}/>
            <StatisticLine text="Positive" value={(`${positive}%`)}/>
        </tbody>
    </table>
  </div>
  )
}

export default Statistics