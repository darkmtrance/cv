

document.addEventListener("DOMContentLoaded", () => {
    let fromDate = new Date(2023, 1, 1); // 1 de Feb de 2023
    let toDate = new Date(); // Today

    let yearsAndMonths = calcYearsAndMonths(fromDate, toDate);
    let resultadoFinal = "";
    if (yearsAndMonths.years === 0 ) {
      resultadoFinal = yearsAndMonths.months + ' Meses';
    } else if (yearsAndMonths.years === 1 ) {
      resultadoFinal = yearsAndMonths.years + ' Año ' + yearsAndMonths.months + ' Meses';
    } else {
      resultadoFinal = yearsAndMonths.years + ' Años ' + yearsAndMonths.months + ' Meses';
    }

    document.getElementById("resultadoFinal").innerHTML = "("+resultadoFinal+")";

});


function calcYearsAndMonths(fechaInicio, fechaFin) {
    let fecha1 = new Date(fechaInicio);
    let fecha2 = new Date(fechaFin);
  
    let anhos = fecha2.getFullYear() - fecha1.getFullYear();
    let meses = fecha2.getMonth() - fecha1.getMonth();
  
    if (meses < 0 || (meses === 0 && fecha2.getDate() < fecha1.getDate())) {
      anhos--;
      meses = 12 + meses;
    }
  
    return { years: anhos, months: meses };
};