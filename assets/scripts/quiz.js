const questions = Array.from(
    document.getElementsByClassName('quiz-question')
).reverse();

// If I make another quiz this will need to be abstracted...
const results = {
    'guts': 1,
    'charm': 1,
    'knowledge': 1,
    'kindness': 1,
    'proficiency': 1
};

nextQuestion(questions);

function nextQuestion(questions) {
    const question = questions.pop();
    if (!question) {
        result();
        return;
    }

    question.style.display = 'block';
    const answers = question.getElementsByClassName('quiz-question-answers')[0];
    for (const option of answers.getElementsByTagName('li')) {
        option.onclick = () => {
            if (option.dataset.weight in results) {
                results[option.dataset.weight] += 1;
            }
            question.style.display = 'none';
            nextQuestion(questions);
        };
    }
}

function result() {
    const data = [
        results.knowledge,
        results.guts,
        results.proficiency,
        results.kindness,
        results.charm
    ];

    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        'type': 'radar',
        'data': {
            'labels': ['Knowledge', 'Guts', 'Proficiency', 'Kindness', 'Charm'],
            'datasets': [{
                'data': data,
                'backgroundColor': 'rgba(230, 230, 0, 0.8)'
            }]
        },
        'options': {
            'tooltips': false,
            'legend': {
                'display': false
            },
            'scale': {
                'pointLabels': {
                    'fontSize': 20
                },
                'ticks': {
                    'maxTicksLimit': 6,
                    'suggestedMax': 5,
                    'display': false,
                    'beginAtZero': true
                }
            },
            'animation': {
                'duration': 2000
            }
        }
    });
}