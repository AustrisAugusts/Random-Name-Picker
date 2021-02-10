const displayName = function(message) {
  document.querySelector(".name").textContent = message;
};

let values = [];

function randomValue(val) {
 let randomizer = Math.trunc(Math.random() * val.length);
  for(let i = 0; i < val.length; i++) {
    if(randomizer === i) {
      displayName(`${val[i]}`);
    }
  };
};

//This adds more values to the end of values array
//You can add/delete these values in here
//Or you can write another values.push() with more values, that will be added to the current ones
values.push("Bob", "Jim", "Tom", "Anna", "Mark", "Peter", "Bill", "Donald");

document.querySelector(".again").addEventListener("click", function() {
  randomValue(values);
});
