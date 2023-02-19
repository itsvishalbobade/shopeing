import { Component } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-offcanvas',
  templateUrl: './offcanvas.component.html',
  styleUrls: ['./offcanvas.component.css']
})
export class OffcanvasComponent {
  
    title = 'oneshop';
    // offcanvasService: any;
    closeResult= '';
    
    constructor(private offcanvasService: NgbOffcanvas) {}
  
    open(content: any) {
  
      // alert("okkk kay vishay nahi");
      this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
        (result: any) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason: any) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        },
      );
    }
    private getDismissReason(reason: any): string {
      if (reason === OffcanvasDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on the backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  }
  

