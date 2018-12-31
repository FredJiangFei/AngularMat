import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatBadgeModule,
    MatChipsModule,
    MatTableModule
} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        BrowserAnimationsModule,

        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatListModule,
        MatSlideToggleModule,
        MatGridListModule,
        MatDialogModule,
        MatAutocompleteModule,
        MatMenuModule,
        MatCheckboxModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        CdkTableModule,
        MatTabsModule,
        MatBadgeModule,
        MatPaginatorModule,
        MatChipsModule,
        MatTableModule
    ]
})
export class ShareModule { }