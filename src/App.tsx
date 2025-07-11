// src/App.tsx

import { useState } from 'react';
import { workoutPlans, runningPlan } from './data/workoutData';
import { type MonthlyPlan, type RunningPhase } from './types';

// Componente para exibir os botões de seleção de mês/semana
const PlanSelector: React.FC<{ options: { id: number; label: string }[], selected: number, onSelect: (id: number) => void }> = ({ options, selected, onSelect }) => (
  <div className="flex justify-center gap-2 sm:gap-4 my-4">
    {options.map(option => (
      <button
        key={option.id}
        onClick={() => onSelect(option.id)}
        className={`px-4 py-2 text-sm sm:text-base font-bold rounded-lg transition-all duration-300 ${
          selected === option.id
            ? 'bg-emerald-500 text-white shadow-lg'
            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
        }`}
      >
        {option.label}
      </button>
    ))}
  </div>
);

// Componente para exibir a tabela do plano de musculação
const WorkoutTable: React.FC<{ plan: MonthlyPlan }> = ({ plan }) => (
  <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-2xl">
    <h2 className="text-2xl sm:text-3xl font-bold text-emerald-400 mb-2">{plan.title}</h2>
    <p className="text-gray-400 mb-4 text-sm sm:text-base">{plan.focus}</p>
    <div className="flex justify-around text-center mb-6 p-3 bg-gray-900/50 rounded-lg">
      <div><p className="text-gray-400 text-xs sm:text-sm">Séries</p><p className="font-bold text-lg text-white">{plan.sets}</p></div>
      <div><p className="text-gray-400 text-xs sm:text-sm">Reps</p><p className="font-bold text-lg text-white">{plan.reps}</p></div>
      <div><p className="text-gray-400 text-xs sm:text-sm">Descanso</p><p className="font-bold text-lg text-white">{plan.rest}</p></div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {plan.schedule.map(daily => (
        <div key={daily.day} className="bg-gray-700 p-4 rounded-lg">
          <h3 className="font-bold text-white">{daily.day}: <span className="text-emerald-400">{daily.group}</span></h3>
          <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
            {daily.exercises.map(ex => (
              <li key={ex.name}>
                {ex.name}
                {ex.details && <span className="text-xs text-yellow-400 ml-2">({ex.details})</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

// Componente para exibir o plano de corrida
const RunningTable: React.FC<{ phase: RunningPhase }> = ({ phase }) => (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-xl shadow-2xl mt-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{phase.title}</h2>
        <div className="bg-gray-700 p-4 rounded-lg text-gray-300 space-y-2">
            <p><strong className='text-white'>Aquecimento:</strong> {phase.details.aquecimento}</p>
            <p><strong className='text-white'>Treino Principal:</strong> {phase.details.treino}</p>
            <p><strong className='text-white'>Desaquecimento:</strong> {phase.details.desaquecimento}</p>
        </div>
    </div>
);


function App() {
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedRunningPhase, setSelectedRunningPhase] = useState(1);

  const currentWorkoutPlan = workoutPlans.find(p => p.month === selectedMonth)!;
  const currentRunningPhase = runningPlan.find(p => p.id === selectedRunningPhase)!;

  const workoutOptions = workoutPlans.map(p => ({ id: p.month, label: `Mês ${p.month}` }));
  const runningOptions = runningPlan.map(p => ({ id: p.id, label: p.weeks }));

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Meu Plano de Treino Personalizado</h1>
          <p className="text-gray-400 mt-2">Foco, disciplina e consistência!</p>
        </header>

        <main>
          <section id="workout-plan">
            <h2 className="text-center text-3xl font-bold mb-2">Plano de Musculação</h2>
            <PlanSelector options={workoutOptions} selected={selectedMonth} onSelect={setSelectedMonth} />
            <WorkoutTable plan={currentWorkoutPlan} />
          </section>

          <section id="running-plan" className="mt-12">
            <h2 className="text-center text-3xl font-bold mb-2">Plano de Corrida</h2>
            <PlanSelector options={runningOptions} selected={selectedRunningPhase} onSelect={setSelectedRunningPhase} />
            <RunningTable phase={currentRunningPhase} />
          </section>
        </main>
        
        <footer className='text-center mt-12 text-gray-500 text-sm'>
            <p>Gerado por Gemini. Lembre-se de ouvir seu corpo e treinar com segurança.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;