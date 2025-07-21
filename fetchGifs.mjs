// fetchGifs.mjs
import fetch from 'node-fetch';

// Substitua pela sua chave da RapidAPI
const API_KEY = '2f9e96f0b7msh601f4cd24a4c724p13ac92jsndd55d6a168ac'; 

//
// COPIE E COLE ESTE OBJETO COMPLETO NO SEU ARQUIVO fetchGifs.mjs
//

const exerciseTranslationMap = {
    'Agachamento Livre': 'barbell squat',
    'Leg Press 45º': 'leg press',
    'Cadeira Extensora': 'leg extension',
    'Afundo com Halteres': 'dumbbell lunge',
    'Cadeira Adutora': 'adductor machine',
    'Panturrilha em pé': 'standing calf raise',
    'Supino Reto com Halteres': 'dumbbell bench press',
    'Supino Inclinado na Máquina': 'smith machine incline bench press',
    'Peck Deck': 'pec deck fly',
    'Tríceps Pulley com corda': 'cable rope pushdown',
    'Tríceps Pulley com Barra': 'tricep pushdown',
    'Desenvolvimento com Halteres': 'dumbbell shoulder press',
    'Puxada Alta na Polia (Frente)': 'wide grip lat pulldown',
    'Remada Baixa Sentado com barra': 'seated cable row',
    'Remada Baixa Sentado com triangulo': 'v-bar seated cable row',
    'Rosca Direta com Barra W': 'ez bar curl',
    'Rosca no banco inclinado': 'incline dumbbell curl',
    'Rosca Martelo': 'hammer curl',
    'Agachamento Hack': 'hack squat',
    'Mesa Flexora': 'lying leg curl',
    'Cadeira Flexora': 'seated leg curl',
    'Leg Press 45 graus': 'leg press', // Mesmo que o outro Leg Press
    'Cadeira Abdutora': 'abductor machine',
    'Panturrilha sentado': 'seated calf raise',
    'Remada Curvada com Halteres': 'dumbbell bent over row',
    'Flexão de Braço': 'push up',
    'Agachamento Livre (sem peso)': 'bodyweight squat',
    'Prancha Abdominal (até a falha)': 'plank',
    'Polichinelos (1 minuto)': 'jumping jacks',

    'Agachamento Livre com Barra': 'barbell squat',
    'Afundo no Smith': 'smith machine lunge',
    'Panturrilha no Leg Press': 'leg press calf raise',
    'Supino Reto com Barra': 'barbell bench press',
    'Supino Inclinado com Halteres': 'incline dumbbell bench press',
    'Desenvolvimento Militar com Barra': 'barbell overhead press',
    'Elevação Lateral': 'dumbbell lateral raise',
    'Tríceps Testa': 'skull crusher',
    'Barra Fixa (ou Puxada Alta)': 'pull up',
    'Remada Curvada com Barra': 'barbell bent over row',
    'Remada Cavalinho': 't-bar row',
    'Rosca Direta com Barra Reta': 'barbell curl',
    'Rosca Scott': 'preacher curl',
    'Levantamento Terra Romeno (RDL)': 'romanian deadlift',
    'Elevação Pélvica com Barra': 'barbell hip thrust',
    'Bom dia com Barra': 'barbell good morning',
    'Desenvolvimento Arnold': 'arnold press',
    'Elevação Lateral na Polia': 'cable lateral raise',
    'Supino Fechado': 'close grip bench press',
    'Rosca Inclinada com Halteres': 'incline dumbbell curl',
    'Tríceps Corda': 'cable rope pushdown', // Mesmo que 'Tríceps Pulley com corda'

    'Afundo Passando com Halteres': 'dumbbell walking lunge',
    'Flexão': 'push up', // Mesmo que 'Flexão de Braço'
    'Elevação Frontal': 'dumbbell front raise',
    'Tríceps Francês': 'dumbbell overhead tricep extension',
    'Puxada Alta Frente': 'wide grip lat pulldown',
    'Puxada Triângulo': 'v-bar pulldown',
    'Remada Serrote': 'dumbbell one arm row',
    'Rosca Direta com Barra': 'barbell curl',
    'Levantamento Terra Stiff': 'stiff leg deadlift',
    'Elevação Pélvica': 'hip thrust',
    'Cadeira Abdutora (tronco inclinado)': 'abductor machine',
    'Coice na Polia': 'cable kickback',
    'Burpees (10 reps)': 'burpee',
    'Remada Alta (15 reps)': 'upright row',
    'Agachamento com Salto (15 reps)': 'jump squat',
    'Abdominal Remador (20 reps)': 'jackknife sit-up',
    'Escalador (30s)': 'mountain climber',
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

async function fetchExerciseGif(exerciseName) {
    if (!exerciseName) return null;

    try {
        const response = await fetch(`https://exercisedb.p.rapidapi.com/exercises/name/${encodeURIComponent(exerciseName)}`, options);
        const data = await response.json();
        
        // Retorna a URL do GIF do primeiro resultado encontrado
        if (data && data.length > 0) {
            console.log(`✅ Sucesso para: ${exerciseName} -> Encontrado: ${data[0].name}`);
            return data[0].gifUrl;
        } else {
            console.log(`❌ Falha para: ${exerciseName}. Nenhum resultado.`);
            return null;
        }
    } catch (error) {
        console.error(`🚨 Erro ao buscar ${exerciseName}:`, error);
        return null;
    }
}

async function generateEnrichedData() {
    console.log("Iniciando busca dos GIFs...");
    const enrichedExercises = {};

    for (const [portugueseName, englishSearchTerm] of Object.entries(exerciseTranslationMap)) {
        const gifUrl = await fetchExerciseGif(englishSearchTerm);
        enrichedExercises[portugueseName] = gifUrl;
        // Pausa para não sobrecarregar a API
        await new Promise(resolve => setTimeout(resolve, 500)); 
    }

    console.log("\n\n--- RESULTADO FINAL (copie e cole isso) ---\n");
    console.log(JSON.stringify(enrichedExercises, null, 2));
    console.log("\n--- FIM DO RESULTADO ---\n");
}

generateEnrichedData();