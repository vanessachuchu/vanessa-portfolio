// Chart utilities for data visualization
const ChartUtils = {
  // Create radar chart for skills
  createRadarChart: (ctx, data, options = {}) => {
    const defaultOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 5,
          ticks: {
            display: false
          },
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          },
          angleLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      }
    };

    return new ChartJS(ctx, {
      type: 'radar',
      data: data,
      options: { ...defaultOptions, ...options }
    });
  },

  // Create progress bar chart
  createProgressChart: (ctx, data, options = {}) => {
    const defaultOptions = {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          max: 100
        },
        y: {
          display: false
        }
      }
    };

    return new ChartJS(ctx, {
      type: 'bar',
      data: data,
      options: { ...defaultOptions, ...options }
    });
  }
};

// Export for global use
window.ChartUtils = ChartUtils;