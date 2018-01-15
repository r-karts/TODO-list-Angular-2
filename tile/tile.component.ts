import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Listing } from '../NestoriaData';

@Component({
    selector: 'tile-comp',
    templateUrl: 'src/app/tile/tile.component.html',
    styleUrls: ['src/app/tile/tile.component.css'],
})
export class TileComponent implements OnInit {
    @Input() tile: Listing;
    value : string = 'hello';
    // clickOnTile : boolean = false;
    @Output() onChanged = new EventEmitter<Listing>();

    inFavorite: boolean = false;
    list: Listing[] = [];

    ngOnInit() {
        this.list = JSON.parse(localStorage.getItem('favoriteList'));
        if (this.list) {
            console.log(this.list);
            if (this.list.indexOf(this.tile, 0) !== -1)
                this.inFavorite = true;
            console.log(' ngOnInit list exist, inFavorite - ' + this.inFavorite);
        } else {
            this.inFavorite = false;
            console.log(' ngOnInit list not exist');
        }
    } // indexOf не работает с объектами

    addToFavorite() {
        if (this.inFavorite) {
            console.log('_____');
            this.list = JSON.parse(localStorage.getItem('favoriteList'));
            console.log(this.list);
            console.log(this.list.indexOf(this.tile, 0));

            // this.list.splice(this.list.indexOf(this.tile, 0), 1);
            // localStorage.setItem('favoriteList', JSON.stringify(this.list));
            // this.inFavorite = false;
        } else {
            console.log('AddTOFavorite ');
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

}
