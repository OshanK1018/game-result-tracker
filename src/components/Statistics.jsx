import StatisticLine from "./StatisticLine";

function Statistics({ wins, losses, draws }) {
    const total = wins + losses + draws;

    if(total ===0) {
        return (
            <p className="bg-slate-700 text-slate-300 p-4 rounded-lg">
                No data collected yet
            </p>
        );
    }

    return (
        <div className="bg-slate-900 p-5 rounded-xl text-left">
            <h2 className="text-2xl font-bold text-center mb-4">Statistics</h2>

            <StatisticLine label="Wins" value={wins} />
            <StatisticLine label="Losses" value={losses} />
            <StatisticLine label="Draws" value={draws} />
            <StatisticLine label="Total Games" value={total} />
        </div>
    );
}

export default Statistics;