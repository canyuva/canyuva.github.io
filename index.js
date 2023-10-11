const savePDF = () => {
  var element = document.getElementById("export-section");
  var opt = {
    margin: [10, 10, 10, 10], //top, left, buttom, right,
    filename: 'Can YUVA - CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { dpi: 300, letterRendering: true },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
  };
  var worker = html2pdf();

  worker.set(opt)
    .from(element)
    .toPdf()
    .get('pdf')
    .then(function (pdf) {
      window.open(pdf.output('bloburl'), '_blank');
    })
}