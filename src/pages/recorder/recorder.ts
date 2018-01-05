import {
    Component,
    ViewChild,
    AfterViewInit
} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'app-recorder',
    templateUrl: 'recorder.html'
})
export class RecorderPage implements AfterViewInit {
    title = 'Recorder page';
    recorder: any;
    @ViewChild('ziggeorecorder') ziggeorecorder: any;

    constructor(public navCtrl: NavController) {

    }

    ngAfterViewInit () {
        this.recorder = this.ziggeorecorder.recorderInstance;

        this.recorder.on('recording', () => {
            console.log('Recorder in progress');
        }, this);

        this.recorder.on('access_granted', () => {
            console.log('Recorder has camera access');
        }, this);

        this.recorder.on('verified', () => {
            console.log('playing your action here');
        }, this);
    }

}
