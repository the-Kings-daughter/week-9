The first article talked about array methods. A few of them are;
.length: displays the length of an array.
.toString(): converts an array to  comma seperated strings.
.join(): joins elements in an array together and specifies the seperator which can be symbols like (#, %, *, $ etc).
.pop(): removes an arrray element at the end of the array.
.push(): adds a new array element at the end of the array.
.shift(): removes the first array element and shifts the remaining array to fill up the space of the removed element.
.unShift(): adds a new element at the beginning of an array.
--We can use Array indexes to change an element in our array. e.g fruts[0]= "cocumber".
--We can use the .length array method to add new elements to an array. e.g fruts[fruits.length]= "tangerine".
--We can concatenate or merge different arrays together using the .concat array method.
--We can collapes a nested array into a single array using the .flat() array method.
--We can also use .splice() and .slice() to add or remove elements in an array. 
--The .slice removes the elements and uses them to form a new array.

The second, third and fifth article talked about functions.
--Functions are block of codes that performs a particular task and are reusable most importantly.
--Functions are defined by a 'function' keyword, a function name, the function parameters inside parentheses() and the function body inside curly brace{} where the code to be executed is placed.
--Function name can contain letters, numbers, dollarsign and underscore but they should not start with a number.
--A function has to be called before it can be executed. 
--When javaScript encounters a return statement while executing a function, it simple tells the function to stop executing.
--Parameters are the variables passed into the function parentheses() at the point of the function declation.
--Arguments are the values passed into the function parentheses() at the point of invoking or calling the function.
--function expressions are anonymous or named functions assigned to a variable.
--function constructors are functions assigned to a variable but they are constructed using the 'new' keyword.
--A function defined by a function declaration or a function expression inherits the local scope of that function, while a function defined by a function constructor inherits the global scope.
--the get function links an object property to a function, and this function will be called when the linked property is looked up.
--the set function links an object property to a function and this funcion will be called when there is an attempt to set that property.
--You can determine whether a function exists by using the "typeof" operator.
--Local variables are variables declared inside a function.
--global variables are declared outside a function but the function can still have access to it.
--When two variables are declared, one globally and the other locally, the function ignores the global one and executes the local one.
--If a function is called without passing an argument it returns undefined.

The fourth article talked about Control flow statements
--Control flow statements are statements that are used to control the order in which statements are executed in a program baseed on certain conditions.
--They are mainly 3 control flow statements. which are; If/else statements, switch statements and loops.
--If/else statements are used to execute a block of codes if certain conditions are met. what it does is, if a condition is true, it executes a block of code, if it is false it executes a different block of code.
--Switch statements uses the value of a variable to execute a block of code. you first have to declare a variable and assign a value to it, the switch statement then uses this value to execute a block of code if a particular case is met, otherwise it executes the default statement.
--Loops are used to execute a block of codes multiple times until the particular condition passed in the loop is false. A loop continues to run as long as the condition given to it is true.
--We have mainly the for, while loop and do-while loop
--The for loop starts with the 'for' keyword the parentheses(), inside the parentheses() you initialize a value, then pass a condition to it and if ths condition is met, it either increments or decrements the value.
--The while loop first declares a variable and assigns a value to it outside the loop. then you have the 'while' keyword, inside the parentheses you have your condition, so as long as this condition is true, you pass in what should be executed inside curly braces{} after the parentheses()
--The do-while is similar to the while loop but what it does is to execute the entire code first before checking if the condition is true or false.


