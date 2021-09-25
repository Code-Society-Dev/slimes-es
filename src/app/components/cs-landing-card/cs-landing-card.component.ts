import {
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-cs-landing-card',
  templateUrl: './cs-landing-card.component.html',
  styleUrls: ['./cs-landing-card.component.css']
})

export class CsLandingCardComponent implements OnInit {

  paragraph: String[];

  constructor() {
    this.paragraph = [];
  }

  ngOnInit(): void {
    this.paragraph[0] = 'Slime.es es la red de portafolios oficial de la comunidad de diseñadores alojada en discord “Slime”.';
    this.paragraph[1] = 'Hace tiempo en un prado, nuestra pequeña criatura FANtástica se decidió por aventurarse en un mundo lleno de sorpresas, sobrepasando cada una de ellas para convertirse en la mejor versión de si misma, “tratar es querer y querer es poder” es lo que se repite nuestra fiel compañera en su largo camino...¿Que le espera?, ¿Podré encontrar lo que busca?, son algúnas de las preguntas que nos hacemos como diseñadores, ilustradores o creadores visuales.';
  }

  iniciarSesion() {
    // alert('iniciarSesion');
    location.href = 'https://discord.com/api/oauth2/authorize?client_id=884448848393699369&redirect_uri=http%3A%2F%2F37.120.168.246%3A1337%2Fconnect%2Fdiscord%2Fcallback&response_type=code&scope=identify%20email%20connections';
  }

  checkUSer() {
    // alert('checkUSer');
  }
}
