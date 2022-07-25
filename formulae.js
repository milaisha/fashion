function calculateAreaRectangle() {
    let width = document.getElementById("width").value;
    let length = document.getElementById("length").value;
    let area = (width * length).toFixed(2);
    document.getElementById("area").value = area;
 
  }
  function calculateAreaCircle() {
    let radius = document.getElementById("radius").value;
    let areaC = (Math.PI  * radius * radius).toFixed(2);
    document.getElementById("areaC").value = areaC;

  }

  function calculateAreaTriangle() {
    let base = document.getElementById("base").value;
    let height = document.getElementById("height").value;
    let areaT = ((base * height) / 2).toFixed(2);
    document.getElementById("areaT").value = areaT;
  }

  function calculatePerimeterRectangle(){
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
  }
    
    