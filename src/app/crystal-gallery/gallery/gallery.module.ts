import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxComponent } from '../lightbox/lightbox.component';
import { LightboxMobileComponent } from '../lightbox/lightbox-mobile.component';
import { GalleryComponent } from './gallery.component';
import { CrystalLightbox } from'../services/dom.service' 
import { MasonryLayoutComponent } from '../masonry/masonry-layout.component'; 
import { PinchDirective } from '../directives/pinch.directive'; 

@NgModule({
    declarations: [
        LightboxComponent,
        LightboxMobileComponent,
        GalleryComponent,
        MasonryLayoutComponent,
        PinchDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        GalleryComponent
    ],
    providers: [
        CrystalLightbox
    ],
    bootstrap: [
        
    ],
    entryComponents: [
        LightboxComponent,
        LightboxMobileComponent
    ]
})
export class CrystalGalleryModule { }
