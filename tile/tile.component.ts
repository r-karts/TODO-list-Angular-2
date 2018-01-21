import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listing } from '../NestoriaData';
import * as _ from 'lodash';

@Component({
    selector: 'tile-comp',
    templateUrl: 'src/app/tile/tile.component.html',
    styleUrls: ['src/app/tile/tile.component.css'],
})
export class TileComponent implements OnInit {
    @Input() tile: Listing;
    @Output() onChanged = new EventEmitter<Listing>();
    inFavorite: boolean = false;
    list: Listing[] = [];

    ngOnInit() {
        this.list = JSON.parse(localStorage.getItem('favoriteList'));
        if (this.list) {
            if (this.indexItemInList(this.list, this.tile) !== -1)
                this.inFavorite = true;
        }
    }

    clickToFavorite() {
        if (this.inFavorite) {
            this.list = JSON.parse(localStorage.getItem('favoriteList'));
            this.list.splice(this.indexItemInList(this.list, this.tile), 1);
            localStorage.setItem('favoriteList', JSON.stringify(this.list));
            this.inFavorite = false;
        } else {
            this.list = JSON.parse(localStorage.getItem('favoriteList'));
            if (!this.list) {
                this.list = [];
            }
            this.list.push(this.tile);
            localStorage.setItem('favoriteList', JSON.stringify(this.list));
            this.inFavorite = true;
        }
    }

    clickToImage() {
        this.onChanged.emit(this.tile);
    }

    indexItemInList(list: Listing[], item: Listing): number {
        let exist = -1;
        list.forEach((value, index) => {
            if (_.isEqual(value, item)) {
                exist = index;
                return exist;
            }
        });
        return exist;
    }

}
