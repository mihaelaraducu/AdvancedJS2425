function degToRad(degrees) {
  return degrees * Math.PI / 180;
}

class Circle {
  constructor(ctx, listId, radius, x, y, color) {
    this.ctx = ctx;
    this.listId = listId;
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.color = color;
    this.name = 'Cerc';
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, degToRad(0), degToRad(360), false);
    this.ctx.fill();
  }

  reportArea() {
    let listItem = document.createElement('li');
    listItem.innerHTML = `${this.name}: aria este ${Math.round(Math.PI * (this.radius * this.radius))}px<sup>2</sup> = ${Math.round(Math.PI * (this.radius * 0.0264583333 * this.radius * 0.0264583333))} cm<sup>2</sup> `

    let list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }

  reportPerimeter() {
    let listItem = document.createElement('li');
    listItem.textContent = `${this.name}: lungimea cercului este ${Math.round(2 * Math.PI * this.radius)}px.`

    let list = document.getElementById(this.listId);
    list.appendChild(listItem);
  }
}

export { Circle };
