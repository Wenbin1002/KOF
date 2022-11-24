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

        this.time_left = 60000;
        this.$timer = this.root.$kof.find(`.kof-head-timer`);
    }

    start() {

    }

    update() {
        this.time_left -= this.timedelta;

        if(this.time_left < 0) {
            this.time_left = 0;

            let [a,b] = this.root.players;
            if(a.status !== 6 && b.status !== 6) {
                a.status = b.status = 6;
                a.frame_current_cnt = b.frame_current_cnt = 0;
            }
        }

        this.$timer.text(parseInt(this.time_left / 1000));

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