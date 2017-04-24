import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class AlertService {

    constructor(private snackBar: MdSnackBar) {
    }

    showToaster(msg: string) {
        this.snackBar.open(msg, null, {
            duration: 3000,
        });
    }
}