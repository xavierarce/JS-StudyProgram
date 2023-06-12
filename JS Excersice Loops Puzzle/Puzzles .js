//Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered. 
//For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
//Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


array1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
function clearRoom(arr){
        //Sort Array
        arr.sort((a,b)=>a-b);
        console.log(arr);
        //Final Array
        const result = [];
        //SubArray
        let current = [];
        
        //Loop each item
        for(i = 0; i < arr.length ; i++){
                //If number = to next number add to current array
                if(arr[i]===arr[i+1]){
                        current.push(arr[i]);
                }
                // if next is not equal
                else{
                        //Add number to currect array
                        current.push(arr[i])
                        //if current array more than 1 element, add array to result
                        if(current.length >1){
                                result.push(current);
                        }
                        //Else,  only element to result array
                        else{
                                result.push(current[0]);
                        }
                        // Reset the current array
                        current = [];
                }     
        }
        return result;

}

console.log(clearRoom(array1))


//Question 2: Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number.
// For example: answer([1,2,3], 4)should return [1,3]
array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

function findSum(arr, target){
        //empty array
        result = [];
        //lop over first number of sum
        for(let i=0 ; i < arr.length; i++){
                //lopp over second number of sum
                for(let j=0; j< arr.length; j++){
                        //if i + j = target 
                        if(arr[i]+arr[j] === target){
                        //add into result
                        result.push([arr[i],arr[j]]);
                }
                }
        }
        return result
}

console.log(findSum(array2,4))

//Question 3: Write a function that converts HEX to RGB. 
//Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

function convertColor(color) {
        // Check if the input is in HEX format (starts with #)
        if (color.startsWith('#')) {
          // Remove the # symbol
          color = color.slice(1);
      
          // Convert HEX to RGB
          const red = parseInt(color.substr(0, 2), 16);
          const green = parseInt(color.substr(2, 2), 16);
          const blue = parseInt(color.substr(4, 2), 16);
      
          return `RGB(${red}, ${green}, ${blue})`;
        }
      
        // Check if the input is in RGB format (starts with RGB)
        if (color.startsWith('RGB')) {
          // Extract the numbers from the RGB format
          const regex = /(\d+),\s*(\d+),\s*(\d+)/;
          const matches = color.match(regex);
      
          if (matches) {
            // Convert RGB to HEX
            const red = parseInt(matches[1]).toString(16).padStart(2, '0');
            const green = parseInt(matches[2]).toString(16).padStart(2, '0');
            const blue = parseInt(matches[3]).toString(16).padStart(2, '0');
      
            return `#${red}${green}${blue}`;
          }
        }
      
        // If the input format is invalid, return an empty string or handle the error as needed
        return '';
}
      
// Example usage
console.log(convertColor('#FF99992'));  
console.log(convertColor('RGB(255, 0, 0)'));         