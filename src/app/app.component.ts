import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  listJurusan = [];
  jurusan = ['Infor', 'Komputer'];
  nama = "";
  desk = "";

  constructor(private router : Router) {}

  getData(){
    return this.listJurusan;
  }

  inputData(nama, desk){
    this.jurusan = [nama, desk];
    this.listJurusan.push(this.jurusan);
    this.nama = "";
    this.desk = "";
  }

  editData(nama, desk){
    for (let i = 0; i< this.listJurusan.length; i++)
    {
      this.jurusan = this.listJurusan[i];

      if(this.jurusan[0] == nama)
      {
        this.jurusan[1] = desk;
      }

      this.listJurusan[i] = this.jurusan;
    }
    
    this.nama = "";
    this.desk = "";
  }

  input(){
    this.router.navigate(['/input']);
  }

  edit(){
    this.router.navigate(['/edit', this.listJurusan]);
  }

  list(){
    this.router.navigate(['/list']);
  }
}
