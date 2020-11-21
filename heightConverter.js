document.getElementById('output').style.visibility = 'hidden';
document.getElementById('lbsInputs').addEventListener('input' ,function (e){
    document.getElementById('output').style.visibility = 'visible';
    let cms = e.target.value;
    document.getElementById('metersOutput').innerHTML = cms/100;
    document.getElementById('feetsOutput').innerHTML = cms*0.0328084;
    document.getElementById('inchesOutput').innerHTML = cms*0.393701;
})