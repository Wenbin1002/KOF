import { Controller } from '/static/js/controller/base.js';
import { GameObject } from '/static/js/game_object/base.js';

class GameMap extends GameObject {
    constructor(root) {
        super();
        this.root = root;
        this.$canvas = $('<canvas width="1280" height="720" tabindex=0></canvas>');
        this.ctx = this.$canvas[0].getContext('2d');
        this.root.$kof.append(this.$canvas);
        this.$canvas.focus();

        this.controller = new Controller(this.$canvas);
    }

    start() {

    }

    update() {
        this.render();
    }

    render() {
        this.ctx.clearRect(0,0,this.$canvas.width(),this.$canvas.height());
        // this.ctx.fillStyle = "lightblue";
        // this.ctx.fillRect(0,0,this.$canvas.width(),this.$canvas.height());
    }
}

export {
    GameMap
}