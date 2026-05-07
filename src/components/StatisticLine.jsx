function StatisticLine({ label, value }) {
    return (
        <p className="flex justify-between border-b border-slate-600 py-2">
            <span>{label}</span>
            <span className="font-bold">{value}</span>
        </p>
    );
}

export default StatisticLine;