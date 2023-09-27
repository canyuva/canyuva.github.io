const savePDF = () => {
  var element = document.body;
  var opt = {
    margin: [30, 30, 30, 30], //top, left, buttom, right,
    filename: 'Can YUVA - CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { dpi: 192, scale: 1, letterRendering: true },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };
  var worker = html2pdf();
  
  worker.set(opt)
    .from(element)
    .toPdf()
    .get('pdf')
    .save();
}