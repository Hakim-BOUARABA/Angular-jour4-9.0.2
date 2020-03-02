import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // cette méthode va être déclencher quand l'internaute va cliquer que le bouton submit "envoyer du formulaire"
  // f => correspond à l'ensemble de champs du formulaire 
  // donc dans f vous allez retouver les champs commentaires et le champ email
  demandeContact(f){
    console.log(f.value)
  }

}
