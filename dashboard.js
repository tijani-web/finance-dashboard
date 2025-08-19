
        // Theme toggle functionality
        document.getElementById('themeToggle').addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            
            // Update icon based on theme
            const icon = this.querySelector('i');
            if (document.body.classList.contains('light-mode')) {
                icon.classList.remove('ri-moon-line');
                icon.classList.add('ri-sun-line');
                this.querySelector('span').textContent = 'Light Mode';
            } else {
                icon.classList.remove('ri-sun-line');
                icon.classList.add('ri-moon-line');
                this.querySelector('span').textContent = 'Dark Mode';
            }
        });

        // Mobile menu toggle
        document.getElementById('menuToggle').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('active');
            
            // Update menu icon
            const icon = this.querySelector('i');
            if (document.getElementById('sidebar').classList.contains('active')) {
                icon.classList.remove('ri-menu-line');
                icon.classList.add('ri-close-line');
            } else {
                icon.classList.remove('ri-close-line');
                icon.classList.add('ri-menu-line');
            }
        });

        // Initialize charts
        document.addEventListener('DOMContentLoaded', function() {
            // Balance Line Chart
            const balanceCtx = document.getElementById('balanceLineChart').getContext('2d');
            new Chart(balanceCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Balance',
                        data: [18000, 19000, 19500, 20000, 20500, 21189],
                        borderColor: '#7e5bef',
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: (context) => {
                            const ctx = context.chart.ctx;
                            const gradient = ctx.createLinearGradient(0, 0, 0, 80);
                            gradient.addColorStop(0, 'rgba(126, 91, 239, 0.2)');
                            gradient.addColorStop(1, 'rgba(126, 91, 239, 0)');
                            return gradient;
                        }
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        }
                    }
                }
            });

            // Income Line Chart
            const incomeCtx = document.getElementById('incomeLineChart').getContext('2d');
            new Chart(incomeCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Income',
                        data: [10000, 10500, 11000, 11500, 12000, 12450],
                        borderColor: '#00c49a',
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: (context) => {
                            const ctx = context.chart.ctx;
                            const gradient = ctx.createLinearGradient(0, 0, 0, 80);
                            gradient.addColorStop(0, 'rgba(0, 196, 154, 0.2)');
                            gradient.addColorStop(1, 'rgba(0, 196, 154, 0)');
                            return gradient;
                        }
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        }
                    }
                }
            });

            // Expenses Line Chart
            const expensesCtx = document.getElementById('expensesLineChart').getContext('2d');
            new Chart(expensesCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Expenses',
                        data: [9000, 8500, 8700, 8800, 8600, 8739],
                        borderColor: '#ff4d4f',
                        tension: 0.4,
                        pointRadius: 0,
                        borderWidth: 2,
                        fill: true,
                        backgroundColor: (context) => {
                            const ctx = context.chart.ctx;
                            const gradient = ctx.createLinearGradient(0, 0, 0, 80);
                            gradient.addColorStop(0, 'rgba(255, 77, 79, 0.2)');
                            gradient.addColorStop(1, 'rgba(255, 77, 79, 0)');
                            return gradient;
                        }
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            display: false
                        },
                        x: {
                            display: false
                        }
                    }
                }
            });

            // Doughnut Chart
            const doughnutCtx = document.getElementById('expensesDoughnutChart').getContext('2d');
            new Chart(doughnutCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Shopping', 'Home', 'Vacation', 'Other'],
                    datasets: [{
                        data: [2000, 1800, 1200, 1000],
                        backgroundColor: ['#7e5bef', '#00c49a', '#ffbb33', '#ff4d4f'],
                        borderWidth: 0,
                        cutout: '70%'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });

            // Total Balance Chart
            const totalBalanceCtx = document.getElementById('totalBalanceChart').getContext('2d');
            new Chart(totalBalanceCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Balance',
                        data: [18000, 19000, 19500, 20000, 20500, 21189],
                        backgroundColor: '#7e5bef',
                        borderRadius: 6,
                        barPercentage: 0.6
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#b3b3b3'
                            }
                        },
                        x: {
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#b3b3b3'
                            }
                        }
                    }
                }
            });

            // Income Statistics Chart
            const incomeChartCtx = document.getElementById('incomeChart').getContext('2d');
            new Chart(incomeChartCtx, {
                type: 'bar',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [
                        {
                            label: 'Replenishment',
                            data: [3000, 4000, 3500, 4200, 4800, 5000],
                            backgroundColor: '#7e5bef',
                            borderRadius: 6,
                            barPercentage: 0.4
                        },
                        {
                            label: 'Products',
                            data: [2000, 2200, 2500, 2800, 3000, 3200],
                            backgroundColor: '#00c49a',
                            borderRadius: 6,
                            barPercentage: 0.4
                        },
                        {
                            label: 'Bills',
                            data: [5000, 4300, 5000, 4500, 4200, 4250],
                            backgroundColor: '#ffbb33',
                            borderRadius: 6,
                            barPercentage: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            stacked: true,
                            grid: {
                                display: false
                            },
                            ticks: {
                                color: '#b3b3b3'
                            }
                        },
                        y: {
                            stacked: true,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.1)'
                            },
                            ticks: {
                                color: '#b3b3b3'
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        });