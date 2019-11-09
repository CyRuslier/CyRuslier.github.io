class Cap {

    constructor() {

    const capImg = document.createElement('img');
    capImg.onload = () => {
        this.capImg = capImg;

        const capImgRatio = capImg.naturalWidth/capImg.naturalHeight;

        this.w = 130; 
        this.h = 200;
  
        this.x = 170;
        this.y = -this.h;
        }
        capImg.src="./images/casquette.png";
}
    
    draw() {
        if (!this.capImg) return; // if `this.img` is not loaded yet => don't draw
        ctx.drawImage(this.capImg, this.x, this.y, this.w, this.h);
    
    }
  
    hits(bike) {
        return (

          (bike.x+bike.w >= this.x && bike.x <= this.x+this.w) 
          &&
          (bike.y <= this.y+this.h && bike.y+bike.h >= this.y)
        );
      }
  }

  