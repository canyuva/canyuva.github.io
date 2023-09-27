const savePDF = () => {
  var element = document.body;
  var opt = {
    margin: [30, 30, 30, 30], //top, left, buttom, right,
    filename: 'Can YUVA - CV.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas:  { dpi: 300, letterRendering: true, width: 1080, height: 1920},
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css'] }
  };
  var worker = html2pdf();
  
  worker.set(opt)
    .from(element)
    .toPdf()
    .get('pdf')
    .save();
}