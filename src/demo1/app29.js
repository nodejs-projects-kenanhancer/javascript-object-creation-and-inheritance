var Animal = {
    name: "Animal",
    weight: "0",
    type: "",
    getName: function () {
        return this.name;
    },
    getWeight: function () {
        return this.weight;
    },
    getType: function () {
        return this.type;
    }
};

var lion = Object.create(Animal);
lion.name = "Lion";
lion.weight = "200kg";
lion.type = "Carnivorous";
console.log(lion.getName());

var bird = Object.create(Animal);
bird.name = "Bird";
bird.weight = "10gr";
bird.type = "Herbivorous";
console.log(bird.getName());