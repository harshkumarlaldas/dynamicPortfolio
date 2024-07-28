document.addEventListener('DOMContentLoaded', function() {
    const excelData = JSON.parse(localStorage.getItem('excelData'));

    if (excelData) {
        document.getElementById('nameField').textContent = excelData.name;
        document.getElementById('titleField').textContent = excelData.title;
        document.getElementById('universityField').textContent = excelData.university;
    } else {
        alert('No data found. Please upload the Excel file again.');
        window.location.href = 'index.html'; // Redirect to main page if data is missing
    }
});
