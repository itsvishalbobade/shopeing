import { Component } from '@angular/core';
// import { OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {  NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oneshop';
  // offcanvasService: any;
  closeResult= '';
  
  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: object) {

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

	isMenuOPened:boolean=false;

	toggleMenu(){
		const toggleIcon=document.getElementById('icon')
		toggleIcon?.classList.toggle('fa-caret-up')
		this.isMenuOPened=!this.isMenuOPened;
	}
}
