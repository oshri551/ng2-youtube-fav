import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';

@Component({
    moduleId: module.id,
    selector: 'app-header',
    template: require('./appHeader.component.html'),
    styles: [require('./appHeader.component.css')],
    directives: [MdToolbar]
})
export class appHeaderComponent implements OnInit {
    @Output() onMenuClick = new EventEmitter();

    constructor() { }

    ngOnInit() { 
    }

    toggleMenu() {
        this.onMenuClick.emit({});
    }

}