document.getElementById('fileInput').addEventListener('change', handleFile, false);

let excelData = {};

function handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const data = new Uint8Array(event.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet, {header: 1});
        excelData = {
            name: json[1][0],
            title: json[1][1],
            university: json[1][2]
        };
        localStorage.setItem('excelData', JSON.stringify(excelData));
    };

    reader.readAsArrayBuffer(file);
}

function loadTemplate(templateName) {
    if (templateName === 'template1') {
      
        window.location.href = 'template1.html';
    } else if (templateName === 'template2') {
       
        window.location.href = 'template2.html';
    }
}
