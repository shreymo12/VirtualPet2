class Food{
    constructor(){
        this.image = loadImage("Milk.png");
        this.foodStock=0;
        this.lastFed;
    }
    getFoodStock(){

    }
    undateFoodStock(){

    }
    deductFood(){

    }
    display(){
        var x=80, y=100;

        imageMode (CENTER);
        this.image(this.image, 720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0; i<this.foodStock; 1++){
                if(i%10==0){
                    x=80;
                    y+=50; 
                }
                this.image(this.image, x, y, 50, 50);
                x+=30;
            }
        }
    }
}