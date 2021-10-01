// Break lines
function breakLines() {
    console.log("")
    console.log("")
  }
  
  // Object
  var cat = {
    name: "Garfield",
    age: 3,
    isCute: true
  }
  
  console.log(cat)
  console.log(cat.age)
  console.log(cat["age"])
  
  if (cat.isCute) {
    console.log("So cute !")
  }
  
  breakLines()
  
  // Combine
  var cat2 = {
    name: "Zephyr",
    age: 6,
    isCute: false
  }
  
  var cats = [cat, cat2]
  
  console.log(cats[0].age)
  console.log(cats[0]["age"])
  
  console.log(cats[1].isCute)
  console.log(cats[1]["isCute"])
  
  breakLines()
  
  // Even
  function checkIfEven(num) {
    if (num % 2 === 1) {
      console.log("Odd")
    } else {
      console.log("Even")
    }
  }
  
  checkIfEven(43)
  checkIfEven(40)
  checkIfEven(23343)
  checkIfEven(23342)
  
  breakLines()
  
  // Compare
  function compare(num1, num2) {
    if (num1 > num2) {
      console.log(`${num1} is bigger than ${num2}`)
    } else if (num1 < num2) {
      console.log(`${num2} is bigger than ${num1}`)
    } else {
      console.log(`${num1} is equal to ${num2}`)
    }
  }
  
  compare(2, 3)
  compare(30, 20)
  compare(3000, 3000)
  
  breakLines()
  
  // Add up
  function addUp(num) {
    var result = 0
  
    for (var i = 1; i <= num; i++) {
      result = result + i
    }
  
    return result
  }
  
  var sum = addUp(12)
  console.log(sum)
  
  breakLines()
  
  // Time
  
  // Vincent's solution
  function formatVincent(num) {
    var hours = Math.floor(num / 3600)
    num %= 3600
  
    var minutes = Math.floor(num / 60)
    var seconds = Math.floor(num % 60)
  
    return `${hours}:${minutes}:${seconds}`
  }
  
  var result = formatVincent(3700)
  console.log("Vincent's solution")
  console.log(result)
  
  // Eloi's solution
  function formatEloi(num) {
    var hours = 0
    var minutes = 0
    var seconds = 0
  
    for(var i = 0; i < num; i++) {
      if (seconds === 59) {
        minutes = minutes + 1
        seconds = -1
      }
  
      if (minutes === 60) {
        hours = hours + 1
        minutes = 0
      }
  
      seconds = seconds + 1
    }
  
    return `${hours}:${minutes}:${seconds}`
  }
  
  var result = formatEloi(3700)
  console.log("Eloi's solution")
  console.log(result)
  
  breakLines()
  
  // Bonus 1
  // Evan's soltion
  function generatePasswordEvan(num) {
    var alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    var password = []
  
    for (var i = 0; i < num; i++) {
      var randomAlpha = alpha[Math.floor(Math.random() * alpha.length)]
      password.push(randomAlpha)
    }
  
    if (num < 6 || num > 15) {
      console.log("error")
    } else {
      console.log(password.join(""))
    }
  }
  
  console.log("Evan's solution")
  generatePasswordEvan(7)
  generatePasswordEvan(5)
  
  // Simpler solution
  function generatePasswordSimple(num) {
    if (num < 6 || num > 15) {
      return "error"
    } else {
      var alphabet = "ABCEFGHIJKLMNOPQRSTUVWXYZ"
      var password = ""
  
      for (var i = 0; i < num; i++) {
        var randomIndex = Math.floor(Math.random() * alphabet.length)
        var character = alphabet.charAt(randomIndex)
        password = password + character
      }
  
      return password
    }
  }
  
  console.log("simpler solution")
  var result1 = generatePasswordSimple(5)
  var result2 = generatePasswordSimple(7)
  console.log(result1)
  console.log(result2)
  
  // Jong's solution
  function generatePasswordJong(num) {
    if (num < 6 || num > 15) {
      return "Error"
    } else {
      var min = 65
      var max = 90
      var password = ""
  
      for (var i = 0; i < num; i++) {
        var random = Math.floor(Math.random() * (max - min + 1) + min)
        password = password + String.fromCharCode(random)
      }
      
      return password
    }
  }
  
  console.log("Jong's solution")
  var result1 = generatePasswordJong(5)
  var result2 = generatePasswordJong(15)
  console.log(result1)
  console.log(result2)
  
  breakLines()
  
  // Bonus 2
  function launchDice(numberOfDice) {
    var min = 1
    var max = 6
    var total = 0
    var result = []
  
    for (var i = 0; i < numberOfDice; i++) {
      var random = Math.floor(Math.random() * (max - min + 1) + min)
      result.push(random)
      total += random
    }
  
    console.log(`${result.join(" + ")} = ${total}`)
    return total
  }
  
  var player1 = launchDice(5)
  var player2 = launchDice(5)
  
  if (player1 > player2) {
    console.log(`Joueur 1 a gagné ${player1} > ${player2}`)
  } else if (player1 < player2) {
    console.log(`Joueur 2 a gagné ${player2} > ${player1}`)
  } else {
    console.log("égalité")
  }