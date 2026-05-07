import { useState } from "react";
import Button from "./components/Button";
import Statistics from "./components/Statistics";

function App() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [draws, setDraws] = useState(0);

  const addWin = () => {
    setWins(wins + 1);
  };

  const addLoss = () => {
    setLosses(losses + 1);
  };

  const addDraw = () => {
    setDraws(draws + 1);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex items-center justify-center p-6">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2">Game Result Tracker</h1>

        <p className="text-slate-300 mb-6">
          Track your match results by counting wins, losses, and draws.
        </p>

        <div className="flex justify-center gap-3 mb-6">
          <Button handleClick={addWin} text="Win" />
          <Button handleClick={addLoss} text="Loss" />
          <Button handleClick={addDraw} text="Draw" />
        </div>

        <Statistics wins={wins} losses={losses} draws={draws} />
      </div>
    </div>
  );
}

export default App;