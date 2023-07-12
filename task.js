function calc(){ 
    var num1,num2;
    var num1 = parseFloat(document.getElementById('num1').value);
      var num2 = parseFloat(document.getElementById('num2').value);
      var operator = document.getElementById('operator').value;
      var result;

      switch (operator) {
        case 'add':
          result = num1 + num2;
          break;
        case 'sub':
          result = num1 - num2;
          break;
        case 'mul':
          result = num1 * num2;
          break;
        case 'divide':
          result = num1 / num2;
          break;
        default:
          result = 'Invalid operator';
      }

      alert('The result is ' +result);

      document.getElementById("num1").value="";
      document.getElementById("operator").value="Select an operator";
      document.getElementById("num2").value="";

  
}
    
