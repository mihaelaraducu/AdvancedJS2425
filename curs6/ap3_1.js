
var StudentNou = /** @class */ (function () {
    function StudentNou(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    StudentNou.prototype.display = function () {
        return "My unique code: ".concat(this.studCode, ", my name: ").concat(this.studName, ".");
    };
    return StudentNou;
}());
var studentnou = new StudentNou(1, "JoeRoot");
studentnou.studCode = 3;
console.log(studentnou.display());
