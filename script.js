var students = [];
var packages = [];
var ctx = document.getElementById('placementChart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: students,
        datasets: [{
            label: 'Package (in Lakhs per annum)',
            data: packages,
            backgroundColor: 'skyblue',
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function addRecord() {
    var studentName = document.getElementById('studentName').value;
    var companyName = document.getElementById('companyName').value;
    var package = parseFloat(document.getElementById('package').value);
    
    students.push(studentName + ' @ ' + companyName);
    packages.push(package);
    
    chart.data.labels = students;
    chart.data.datasets[0].data = packages;
    chart.update();
    
    document.getElementById('studentName').value = '';
    document.getElementById('companyName').value = '';
    document.getElementById('package').value = '';
}
