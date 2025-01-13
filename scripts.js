// Agent Activity Chart
const activityCtx = document.getElementById('agentActivityChart').getContext('2d');
new Chart(activityCtx, {
    type: 'line',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Active Agents',
            data: [820, 950, 1100, 980, 1250, 1400, 1300],
            borderColor: 'rgb(13, 110, 253)',
            tension: 0.4
        }, {
            label: 'Inferences (K)',
            data: [250, 380, 420, 350, 480, 520, 490],
            borderColor: 'rgb(25, 135, 84)',
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                position: 'top'
            }
        }
    }
});

// Skills Distribution Chart
const skillsCtx = document.getElementById('skillsDistributionChart').getContext('2d');
new Chart(skillsCtx, {
    type: 'doughnut',
    data: {
        labels: ['Social Connectors', 'Onchain Analysis', 'Trading Skills'],
        datasets: [{
            data: [35, 40, 25],
            backgroundColor: [
                'rgb(13, 110, 253)',
                'rgb(25, 135, 84)',
                'rgb(255, 193, 7)'
            ]
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
}); 