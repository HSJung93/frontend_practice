// var healthObj = {
//   name: "정회성",
//   lastTime: "PM10:12",
//   showHealth: function () {
//     console.log(
//       this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요"
//     );
//   },
// };

// healthObj.showHealth();

// 객체를 동적으로 생성하는 방법
function Health(name, lastTime) {
  this.name = name;
  this.lastTime = lastTime;
  // return this;
}

Health.prototype.showHealth = function () {
  return this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요.";
};

var sw = new Health("Sangwoo", "AM 10:10");
var sh = new Health("Sanghwa", "PM 10:10");
console.log(sw.__proto__);
sw.showHealth();
console.log(sw.showHealth === sh.showHealth);
