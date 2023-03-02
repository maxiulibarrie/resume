var element = document.getElementById('container');

function hideButtons() {
    document.getElementById('buttons').remove();
    document.getElementById('container').classList.add('mt-5');
}

function downloadPdf() {
    var worker = html2pdf(element);
}

