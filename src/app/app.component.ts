import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  tablaBien: any[] = [];
  date: Date = new Date();
  selectedEmpresa: any;

  ngOnInit(): void {

    //tablaBien
    this.tablaBien.push({codigo:"45344", empresa:"ADEPSA", codigoPostal:"08020", email:"info@adepsa.com"});
    this.tablaBien.push({codigo:"98245", empresa:"CIRCOSA", codigoPostal:"08445", email:"admin@circosa.es"});
    this.tablaBien.push({codigo:"23439", empresa:"Comercial Millo, S.L.", codigoPostal:"68022", email:"p.damaso@millo.com"});
    this.tablaBien.push({codigo:"10933", empresa:"Ferretería Hermanos Matanzas", codigoPostal:"08012", email:"info@technomat.com"});
    
  }

  title = 'primenghw';
}
