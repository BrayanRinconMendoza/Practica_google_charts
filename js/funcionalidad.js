/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
google.charts.load("current", {packages:["corechart"]});

function drawChart(a,v) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Ventas');
    data.addRows(a.length);
    for(i=0;i<a.length;i++){
        data.setCell(i, 0, a[i]);
        data.setCell(i, 1, v[i]);
    }
    var options = {
        title: 'Grafica de Ventas',
        is3D: true,
    };

    var bar_chart = new google.visualization.BarChart(document.getElementById('barchart'));
    bar_chart.draw(data,options);
    var pie_chart = new google.visualization.PieChart(document.getElementById('piechart'));
    pie_chart.draw(data,options);

}

function crearGraficoPieMensual(){
    var datos=["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Diciembre"];
    var valores=document.getElementsByName("valor");
    draw_pie_chart(datos,valores);
}

function crearGraficoPieBimestral(){
    var datos=['Bimestre 1', 'Bimestre 2', 'Bimestre 3', 'Bimestre 4', 'Bimestre 5', 'Bimestre 6'];
    var b1=parseFloat(document.getElementById("valor-ene").value)+parseFloat(document.getElementById("valor-feb").value);
    var b2=parseFloat(document.getElementById("valor-mar").value)+parseFloat(document.getElementById("valor-abr").value);
    var b3=parseFloat(document.getElementById("valor-may").value)+parseFloat(document.getElementById("valor-jun").value);
    var b4=parseFloat(document.getElementById("valor-jul").value)+parseFloat(document.getElementById("valor-ago").value);
    var b5=parseFloat(document.getElementById("valor-sep").value)+parseFloat(document.getElementById("valor-oct").value);
    var b6=parseFloat(document.getElementById("valor-nov").value)+parseFloat(document.getElementById("valor-dic").value);
    var valoresB=[b1, b2, b3, b4, b5, b6];
//    nums= new ArrayBuffer(6);
//    var j=0;
//    for(i=0;i<valores.length;i=i+2){
//        var num1=parseFloat(valores[i].value);
//        var num2=parseFloat(valores[i+1].value);
//        var sum=num1+num2;
//        nums[j]=sum;
//        j++;
//    }
    drawChart(datos,valoresB);
    google.charts.setOnLoadCallback(drawChart);
}

function crearGraficoPieTrimestral(){
    var datos=["Trimestre 1", "Trimestre 2", "Trimestre 3", "Trimestre 4"];
    var t1=parseFloat(document.getElementById("valor-ene").value)+parseFloat(document.getElementById("valor-feb").value)+parseFloat(document.getElementById("valor-mar").value);
    var t2=parseFloat(document.getElementById("valor-abr").value)+parseFloat(document.getElementById("valor-may").value)+parseFloat(document.getElementById("valor-jun").value);
    var t3=parseFloat(document.getElementById("valor-jul").value)+parseFloat(document.getElementById("valor-ago").value)+parseFloat(document.getElementById("valor-sep").value);
    var t4=parseFloat(document.getElementById("valor-oct").value)+parseFloat(document.getElementById("valor-nov").value)+parseFloat(document.getElementById("valor-dic").value);
    var valoresT=[t1, t2, t3, t4];
    drawChart(datos,valoresT);
    google.charts.setOnLoadCallback(drawChart);
}

function crearGraficoPieCuatrimestral(){
    var datos=["Cuatrimestre 1", "Cuatrimestre 2", "Cuatrimestre 3"];
    var c1=parseFloat(document.getElementById("valor-ene").value)+parseFloat(document.getElementById("valor-feb").value)+parseFloat(document.getElementById("valor-mar").value)
            +parseFloat(document.getElementById("valor-abr").value);
    var c2=parseFloat(document.getElementById("valor-may").value)+parseFloat(document.getElementById("valor-jun").value)+parseFloat(document.getElementById("valor-jul").value)
            +parseFloat(document.getElementById("valor-ago").value);
    var c3=parseFloat(document.getElementById("valor-sep").value)+parseFloat(document.getElementById("valor-oct").value)+parseFloat(document.getElementById("valor-nov").value)
            +parseFloat(document.getElementById("valor-dic").value);
    var valoresC=[c1, c2, c3];
    drawChart(datos,valoresC);
    google.charts.setOnLoadCallback(drawChart);
}

function crearGraficoPie(){
    var combo=document.getElementById("tipo-inf");
    var selected = combo.options[combo.selectedIndex].text; 
    if(selected==="Mensual"){
        crearGraficoPieMensual();
    }
    if(selected==="Bimestral"){
        crearGraficoPieBimestral();
    }
    if(selected==="Trimestral"){
        crearGraficoPieTrimestral();
    }
    if(selected==="Cuatrimestral"){
        crearGraficoPieCuatrimestral();
    }
}


