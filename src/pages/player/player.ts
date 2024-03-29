import {
    Component,
    AfterViewInit,
    ViewChild
} from '@angular/core';
import { NavController } from 'ionic-angular';

import { API_TOKEN, VIDEO_TOKEN } from '../../constants';

@Component({
    selector: 'page-player',
    templateUrl: 'player.html'
})
export class PlayerPage implements AfterViewInit {
    title = 'Ziggeo Player Page';
    api_token = API_TOKEN;
    video_token = VIDEO_TOKEN;

    player: any;
    @ViewChild('ziggeoplayer') ziggeoplayer: any;

    constructor(public navCtrl: NavController) {

    }

    ngAfterViewInit () {
        this.player = this.ziggeoplayer.playerInstance;

        this.player.on('attached', () => {
            console.log('Attached');
        });

        this.player.on('playing', () => {
            console.log('Playing your action here');
        });

        this.player.on('paused', () => {
            console.log('Paused, your action here');
        });
    }

}
