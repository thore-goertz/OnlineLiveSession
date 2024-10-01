import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MatIcon, MatToolbar, MatIconButton, MatDrawer, MatDrawerContainer, MatDrawerContent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    host: {
        class: 'app-root'
    }
})
export class AppComponent {
}
