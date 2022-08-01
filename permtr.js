function calculateareaPerRectangle(){
    let w = document.getElementById("width").value;
    let h = document.getElementById("height").value;
    
    let area = w * h;
    let perimeter = w + w + h + h;
    
    let result = "Area: " + area + " Perimeter: " + perimeter;
    
    document.getElementById("output").innerHTML = result; 
  }
  function calculateareaPercircle(radius){
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
        document.getElementById("output").innerHTML = result; 
    };
  }


function calculateareaPerimeterTriangle() {
  let sideA = document.getElementById("sideA").value;
  let base = document.getElementById("base").value;
  let sideB = document.getElementById("sideB").value;
  let perimeter = ((sideA + base + sideB)/2).toFixed(2);
  let result = document.getElementById("result");
  result.innerHTML = "Area is " + perimeter;
}




