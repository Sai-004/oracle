var hero = {
  title: "Batman",
  power: 6,
};

function checkPowerChangeTitle() {
  if (hero.power > 5) {
    const temptitle = hero.title;
    hero.title = temptitle + " is strong";
    console.log(temptitle); // ???
  }
}

checkPowerChangeTitle();

console.log(hero.title); /// ???

for (var i = 0; i < 100; i++) {
  console.log(i);
}
console.log(i, "i am outside the loop");
