const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
class Game {
    constructor() {
        this.tacks = 0;
        this.tackPrice = 0.20;
        this.money = 0;
    }
    Init() {
        setTimeout(this.SellTack, 1000);
    }
    
    SellTack() {
        let a = Math.random() * (this.tackPrice / 5 + this.tackPrice * 35 );
        let b = Math.random() * 100;
        let c = 0..this.tackPrice;
        for (let index = 0; index < c.length; index++) {
            const element = c[index];
            b -= 1;
        }
        if (b > 0) {
            b = 0;
        }
        if (b <= 50) {
            this.money += this.tackPrice;
        }
        this.Update;
        setTimeout(this.SellTack, 1000);
    }
    MakeTack() {
        this.tacks ++;
        this.Update;
    }
    Tacks() {
        return this.tacks;
    }
    TackPriceUp() {
        this.tackPrice += 0.01;
        this.Update;
    }
    TackPriceDown() {
        this.tackPrice -= 0.01;
        this.Update;
    }
    Update() {
        document.getElementById("Tack Text").textContent = this.tacks;
        this.tackPrice = parseInt(this.tackPrice[0] + this.tackPrice[1] + this.tackPrice[2] + this.tackPrice[3]);
        document.getElementById("Tack Price Text").textContent = this.tackPrice;
        document.getElementById("Money Text").textContent = this.money;
    }
}
var game = new Game();
game.Init();