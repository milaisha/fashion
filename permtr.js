function calculateareaPerRectangle(){
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;
    
    var area = w * h;
    var perimeter = w + w + h + h;
    
    var result = "Area: " + area + " Perimeter: " + perimeter;
    
    document.getElementById("output").innerHTML = value; 
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




