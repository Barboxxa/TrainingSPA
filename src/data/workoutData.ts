// src/data/workoutData.ts

import { type MonthlyPlan, type RunningPhase } from '../types.ts';

export const workoutPlans: MonthlyPlan[] = [
  // MÊS 1
  {
    month: 1,
    title: "Mês 1: Readaptação e Base",
    focus: "Foco em execução perfeita e conexão mente-músculo. Cargas leves a moderadas.",
    sets: "3 séries",
    reps: "12-15 repetições",
    rest: "45-60 segundos de descanso",
    schedule: [
      { day: "Dia 1", group: "Quadríceps & Panturrilhas", exercises: [{ name: "Agachamento Taça (Goblet Squat)" }, { name: "Leg Press 45º" }, { name: "Cadeira Extensora" }, { name: "Afundo com Halteres" }, { name: "Cadeira Adutora" }, { name: "Panturrilha em pé" }] },
      { day: "Dia 2", group: "Empurrar (Peito/Ombro/Tríceps)", exercises: [{ name: "Supino Reto com Halteres" }, { name: "Supino Inclinado na Máquina" }, { name: "Desenvolvimento com Halteres" }, { name: "Elevação Lateral" }, { name: "Tríceps Pulley com Barra" }] },
      { day: "Dia 3", group: "Puxar (Costas/Bíceps)", exercises: [{ name: "Puxada Alta na Polia (Frente)" }, { name: "Remada Baixa Sentado" }, { name: "Remada Serrote com Halter" }, { name: "Rosca Direta com Barra W" }, { name: "Rosca Martelo" }] },
      { day: "Dia 5", group: "Posteriores, Glúteos & Panturrilhas", exercises: [{ name: "Levantamento Terra Stiff com Halteres" }, { name: "Mesa Flexora" }, { name: "Elevação Pélvica com Barra" }, { name: "Cadeira Abdutora" }, { name: "Coice na Polia" }, { name: "Panturrilha sentado" }] },
      { day: "Dia 6", group: "Full Body", exercises: [{ name: "Remada Curvada com Halteres" }, { name: "Flexão de Braço" }, { name: "Agachamento Livre (sem peso)" }, { name: "Prancha Abdominal (até a falha)" }, { name: "Polichinelos (1 minuto)" }] },
    ]
  },
  // MÊS 2
  {
    month: 2,
    title: "Mês 2: Força e Hipertrofia",
    focus: "Foco em progressão de carga. Escolha um peso que te desafie a cada série.",
    sets: "4 séries",
    reps: "8-12 repetições",
    rest: "60-90 segundos de descanso",
    schedule: [
       { day: "Dia 1", group: "Quadríceps & Panturrilhas", exercises: [{ name: "Agachamento Livre com Barra" }, { name: "Leg Press 45º" }, { name: "Afundo no Smith" }, { name: "Cadeira Extensora" }, { name: "Cadeira Adutora" }, { name: "Panturrilha no Leg Press" }] },
       { day: "Dia 2", group: "Empurrar (Peito/Ombro/Tríceps)", exercises: [{ name: "Supino Reto com Barra" }, { name: "Supino Inclinado com Halteres" }, { name: "Desenvolvimento Militar com Barra" }, { name: "Elevação Lateral" }, { name: "Tríceps Testa" }] },
       { day: "Dia 3", group: "Puxar (Costas/Bíceps)", exercises: [{ name: "Barra Fixa (ou Puxada Alta)" }, { name: "Remada Curvada com Barra" }, { name: "Remada Cavalinho" }, { name: "Rosca Direta com Barra Reta" }, { name: "Rosca Scott" }] },
       { day: "Dia 5", group: "Posteriores, Glúteos & Panturrilhas", exercises: [{ name: "Levantamento Terra Romeno (RDL)" }, { name: "Cadeira Flexora" }, { name: "Elevação Pélvica com Barra" }, { name: "Bom dia com Barra" }, { name: "Cadeira Abdutora" }, { name: "Panturrilha em pé" }] },
       { day: "Dia 6", group: "Ombros & Braços", exercises: [{ name: "Desenvolvimento Arnold" }, { name: "Elevação Lateral na Polia" }, { name: "Supino Fechado" }, { name: "Rosca Inclinada com Halteres" }, { name: "Tríceps Corda" }, { name: "Rosca Martelo" }] },
    ]
  },
  // MÊS 3
  {
    month: 3,
    title: "Mês 3: Intensidade Metabólica",
    focus: "Foco em aumentar o gasto calórico com Supersets e Dropsets.",
    sets: "4 séries",
    reps: "10-15 repetições",
    rest: "60-90s (após o superset)",
    schedule: [
      { day: "Dia 1", group: "Quadríceps & Panturrilhas", exercises: [{ name: "Agachamento Livre" }, { name: "Leg Press 45º + Cadeira Extensora", details: "Superset" }, { name: "Afundo Passando com Halteres" }, { name: "Cadeira Adutora", details: "Dropset na última série" }, { name: "Panturrilha em pé", details: "Dropset na última série" }] },
      { day: "Dia 2", group: "Empurrar (Peito/Ombro/Tríceps)", exercises: [{ name: "Supino Inclinado com Halteres + Flexão", details: "Superset" }, { name: "Desenvolvimento com Halteres" }, { name: "Elevação Lateral + Elevação Frontal", details: "Superset" }, { name: "Tríceps Francês" }] },
      { day: "Dia 3", group: "Puxar (Costas/Bíceps)", exercises: [{ name: "Remada Curvada com Barra" }, { name: "Puxada Alta Frente + Puxada Triângulo", details: "Superset" }, { name: "Remada Serrote" }, { name: "Rosca Direta com Barra", details: "Dropset na última série" }] },
      { day: "Dia 5", group: "Posteriores, Glúteos & Panturrilhas", exercises: [{ name: "Levantamento Terra Stiff" }, { name: "Mesa Flexora + Elevação Pélvica", details: "Superset" }, { name: "Cadeira Abdutora (tronco inclinado)" }, { name: "Coice na Polia" }, { name: "Panturrilha sentado", details: "Dropset na última série" }] },
      { day: "Dia 6", group: "Circuito Metabólico", exercises: [{ name: "Burpees (10 reps)" }, { name: "Remada Alta (15 reps)" }, { name: "Agachamento com Salto (15 reps)" }, { name: "Abdominal Remador (20 reps)" }, { name: "Escalador (30s)" }], details: "Execute em sequência, descanse 2 min e repita 3-4x" },
    ]
  },
];

export const runningPlan: RunningPhase[] = [
    { id: 1, weeks: "Semanas 1-4", title: "Adaptação", details: { aquecimento: "5 min de caminhada rápida", treino: "Alterne 1 min de corrida leve com 2 min de caminhada. Repita 8 vezes.", desaquecimento: "5 min de caminhada lenta" } },
    { id: 2, weeks: "Semanas 5-8", title: "Evolução", details: { aquecimento: "5 min de caminhada rápida", treino: "Alterne 3 min de corrida com 1 min de caminhada. Repita 6-7 vezes.", desaquecimento: "5 min de caminhada lenta" } },
    { id: 3, weeks: "Semanas 9-12", title: "Condicionamento (HIIT)", details: { aquecimento: "5 min de caminhada rápida", treino: "Faça 10 ciclos de: 30s de sprint + 90s de caminhada/trote.", desaquecimento: "5 min de caminhada lenta" } },
]