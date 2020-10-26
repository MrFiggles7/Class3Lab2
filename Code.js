

function HowMany()
{
    var total = 15.00;
    var priceTopping = 1.25;
    var toppings = parseFloat(prompt("How many toppings do you want on your pizza?"));
    var people = parseFloat(prompt("How many people will be sharing this pizza?"));

    total += toppings * priceTopping;
    alert(`Total Cost Per Person: $${total/people}`);
}