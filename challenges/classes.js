// 1. Copy and paste your prototype in here and refactor into class syntax.



class CuboidMakerCls {
    constructor(args) {
        this.length = args.length,
        this.width = args.width,
        this.height = args.height
    }
    volume() {
        return (this.length * this.height * this.width)
    }
    surfaceArea() {
        return (2 * (this.length * this.width + this.length * this.height + this.width * this.height))
    }
}

const cuboid2 = new CuboidMakerCls({
    length: 4,
    width: 5,
    height: 5
}
)
console.log(cuboid2)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CubeMaker extends CuboidMakerCls{
  constructor(args){
    super(args)
    this.width = this.length;
    this.height = this.length;
  }
  volume(){
    return Math.pow(this.length,3)
  }
  surfaceArea(){
    return 3* Math.pow(this.length,2)
  }
}

const rubix = new CubeMaker({
  length: 4,
  width: 5, // yeah i'm declaring this as 5 on purpose as I see it gets overriden (flattened) to the length, per constructor statement, per chrome console
  height: 6 // Same as width above. Per breakpoints and step into, item object doesn't show in stages and get modified but rather comes out of box at 4 x 4 x 4.  
  // these sides also don't even have to be declared. The function constructor does just fine without them it appears
}
)

console.log(rubix.volume())
console.log(rubix.surfaceArea())

// Just playing around
// for (i=0; i<4;i++){
//   const cube[i] = new Cubemaker({
//     length: 2 +1
//   })
// }