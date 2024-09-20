// GETTING ACCESS TO ALL THE HTML CONTAINERS OF THE NECESSARY ELEMENTS
const billTotalDiv = document.getElementById('billTotalInput')
const tipPercentDiv = document.getElementById('tipInput')
let numberOfPeopleDiv = document.getElementById('numberOfPeople')
const totalPerPersonDiv = document.getElementById('perPersonTotal')
increaseButton = document.getElementById('plusButton')
decreaseButton = document.getElementById('minusButton')

//Giving the add and subtract button and event listener to react when they are clicked
increaseButton.onclick = () => increasePeople()
decreaseButton.onclick = () => decreasePeople()

//function that calculates total bill -- bill total + tip//
const calculateBill = () =>{

 
  
  billTotal = Number(billTotalDiv.value)
  tipPercent = Number(tipPercentDiv.value)
  tip = Number(tipPercent/100 * billTotal)
  people = Number(numberOfPeopleDiv.innerText)
  totalAmount = Number(tip + billTotal)
  totalPerPerson = Number(totalAmount/people)
  totalPerPersonDiv.innerText = totalPerPerson.toFixed(2)

  console.log(billTotal)
  console.log(tipPercent)
  console.log(tip)
  console.log(totalAmount)
  console.log(totalPerPerson)
  console.log(people)
  

}
calculateBill()

//function that increases the number of people
increasePeople =  () => {
    let people = Number(numberOfPeopleDiv.innerText)
  people += 1
  numberOfPeopleDiv.innerText = people
  calculateBill()
  

}

//function that decreases the number of people
decreasePeople = () => {
  let people = Number(numberOfPeopleDiv.innerText)
  people -= 1
  numberOfPeopleDiv.innerText = people
  if (people >= 1){
  calculateBill()
  }else{
    numberOfPeopleDiv.innerText = 1
  }
}






