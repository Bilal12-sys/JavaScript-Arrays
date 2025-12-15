function showLiteralArray() {
    var studentNames1 = [];
    document.getElementById("resultLiteral").innerText = "var studentNames1 = [];";
}

// 2. Empty array (object)
function showObjectArray() {
    var studentNames2 = new Array();
    document.getElementById("resultObject").innerText = "var studentNames2 = new Array();";
}

// 3. Strings array
function showStringsArray() {
    var fruits = ["Apple", "Banana", "Mango"];
    document.getElementById("resultStrings").innerText = fruits.join(", ");
}

// 4. Numbers array
function showNumbersArray() {
    var numbers = [10, 20, 30, 40];
    document.getElementById("resultNumbers").innerText = numbers.join(", ");
}

// 5. Boolean array
function showBooleanArray() {
    var flags = [true, false, true];
    document.getElementById("resultBoolean").innerText = flags.join(", ");
}

// 6. Mixed array
function showMixedArray() {
    var mixedArray = ["Bilal", 15, true, null];
    document.getElementById("resultMixed").innerText = mixedArray.join(", ");
}

// 7. Education qualifications
function showQualifications() {
    var qualifications = [
        "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"
    ];
    var output = "";
    for (var i = 0; i < qualifications.length; i++) {
        output += (i+1) + ") " + qualifications[i] + "<br>";
    }
    document.getElementById("resultQualifications").innerHTML = output;
}

// 8. Student scores and percentages
var students = ["Ali", "Sara", "Bilal"];
var scores = [400, 350, 480];
var totalMarks = 500;

function showStudentScores() {
    var output = "";
    for (var i = 0; i < students.length; i++) {
        var percentage = (scores[i] / totalMarks) * 100;
        output += "Student: " + students[i] +
                  " | Score: " + scores[i] +
                  " | Percentage: " + percentage + "%<br>";
    }
    document.getElementById("studentScores").innerHTML = output;
}

// 9. Color array operations
var colors = ["Red", "Blue", "Green"];

function colorOperations() {
    var output = "";

    // Initial array
    output += "Initial Colors: " + colors.join(", ") + "<br><br>";

    // a. Add to beginning
    var colorStart = prompt("Which color to add at the beginning?");
    colors.unshift(colorStart);
    output += "After adding at start: " + colors.join(", ") + "<br>";

    // b. Add to end
    var colorEnd = prompt("Which color to add at the end?");
    colors.push(colorEnd);
    output += "After adding at end: " + colors.join(", ") + "<br>";

    // c. Add two more at beginning
    colors.unshift("Purple", "Orange");
    output += "After adding two at start: " + colors.join(", ") + "<br>";

    // d. Delete first color
    colors.shift();
    output += "After deleting first color: " + colors.join(", ") + "<br>";

    // e. Delete last color
    colors.pop();
    output += "After deleting last color: " + colors.join(", ") + "<br>";

    // f. Add at desired index
    var addIndex = parseInt(prompt("Enter index to add color:"));
    var addColor = prompt("Enter color name:");
    colors.splice(addIndex, 0, addColor);
    output += "After adding at index: " + colors.join(", ") + "<br>";

    // g. Delete from desired index
    var delIndex = parseInt(prompt("Enter index to delete color(s):"));
    var delCount = parseInt(prompt("How many colors to delete?"));
    colors.splice(delIndex, delCount);
    output += "After deletion: " + colors.join(", ") + "<br>";

    document.getElementById("colorArray").innerHTML = output;
}

function runPrograms() {
  var out = "";

  // 10. Store student scores & sort ascending
  var scores = [320, 230, 480, 120];
  scores.sort(function(a, b) {
    return a - b;
  });
  out += "<b>10) Sorted Scores:</b> " + scores + "<br><br>";

  // 11. Cities array & copy 3 elements
  var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
  var selectedCities = cities.slice(0, 3);
  out += "<b>11) Selected Cities:</b> " + selectedCities + "<br><br>";

  // 12. Join array into string
  var arr = ["This ", " is ", " my ", " cat"];
  var sentence = arr.join("");
  out += "<b>12) Joined String:</b> " + sentence + "<br><br>";

  // 13. FIFO (Queue)
  var fifo = [];
  fifo.push("Keyboard");
  fifo.push("Mouse");
  fifo.push("Printer");
  out += "<b>13) FIFO Order:</b><br>";
  out += fifo.shift() + "<br>";
  out += fifo.shift() + "<br>";
  out += fifo.shift() + "<br><br>";

  // 14. LIFO (Stack)
  var lifo = [];
  lifo.push("Keyboard");
  lifo.push("Mouse");
  lifo.push("Printer");
  out += "<b>14) LIFO Order:</b><br>";
  out += lifo.pop() + "<br>";
  out += lifo.pop() + "<br>";
  out += lifo.pop() + "<br><br>";

  document.getElementById("output").innerHTML = out;

  // 15. Dropdown using document.write()
  var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
  document.write("<h2>15) Phone Manufacturers</h2>");
  document.write("<select>");
  for (var i = 0; i < phones.length; i++) {
    document.write("<option>" + phones[i] + "</option>");
  }
  document.write("</select>");
}
