window.jsPDF = window.jspdf.jsPDF;

const savePDF = () => {
  /*   var doc = new jsPDF('p','pt','a4');
    const pdfElement = document.getElementById('export-section') // HTML element to be converted to PDF
  
    doc.html(pdfElement, {
      callback: (pdf) => {
        pdf.save('MyPdfFile.pdf')
      },
      // optional: other HTMLOptions
    }) */

  const pdfElement = document.getElementById('export-section')
  html2canvas(pdfElement,{useCORS: true}).then(function (canvas) {
    document.body.appendChild(canvas);
    var imgdata = canvas.toDataURL("image/jpg");
    imgdata.setAttribute('crossorigin', 'anonymous')
    console.log(imgdata);
    var doc = new jspdf.jsPDF();
    doc.addImage(imgdata, "JPG", 10, 10);
    doc.save("sample.pdf");
  });
}