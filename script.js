let Apple = function () {
    this.weight = 10;
    this.getWeight = function () {
        return this.weight;
    }
    this.decrease = function () {
        this.weight--;
    }
    this.isEmpty = function () {
        if (this.weight == 0) {
            return false;
        }
        return true;
    }
}

let Human = function (name, gender, weight) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
    this.setName = function (name) {
        this.name = name;
    }
    this.gender = parseInt(gender);
    this.isMale = function () {
        if (!this.gender) {
            return false;
        }
        return true;
    }
    this.setGender = function (gd) {
        this.gender = parseInt(gd);
    }
    this.weight = weight;
    this.getWeight = function () {
        return this.weight;
    }
    this.setWeight = function (wei) {
        this.weight = wei;
    }
    this.say = function (str) {
        return document.write(this.getName() +' say : ' + str +'<br/><br/>');
    }
    this.checkApple = function (apple) {
        if (apple.isEmpty()) {
            return true;
        }
        return false;
    }
    this.eat = function (apple) {
        if (this.checkApple(apple)) {
            apple.decrease();
            this.weight++;
        }
    }
}