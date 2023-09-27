const savePDF = () => {
  var element = document.body;
  var opt = {
    margin: [0, 0, 30, 0], //top, left, buttom, right,
    filename: 'my_file.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { dpi: 192, scale: 2, letterRendering: true },
    pagebreak: { mode: 'avoid-all' },
    jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
  };
  var worker = html2pdf();
  
  worker.set(opt)
    .from(element)
    .toPdf()
    .get('pdf')
    .save();
}