let myChart = null;

function dibujarGrafica(history, titulo) {
    const ctx = document.getElementById("divisionChart").getContext("2d");

    if (myChart) {
        myChart.destroy();
    }

    const datasets = history.map((arr, idx) => ({
        label: `Paso ${idx + 1}`,
        data: arr,
        borderWidth: 2,
        fill: false,
        borderColor: `hsl(${(idx * 50) % 360}, 70%, 50%)`,
        backgroundColor: 'rgba(0,0,0,0.1)',
    }));

    myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: Array.from({ length: Math.max(...history.map(a => a.length)) }, (_, i) => i + 1),
            datasets: datasets,
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: titulo,
                    font: {
                        size: 18
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
