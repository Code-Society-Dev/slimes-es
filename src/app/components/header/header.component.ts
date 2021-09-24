import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'cs-button',
  templateUrl: './cs-button.component.html',
  styleUrls: ['./cs-button.component.css']
})
export class CsButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() classBtn: string;

  @Output() onClick: EventEmitter<any>;

  constructor() {
    this.icon = 'discord';
    this.classBtn = 'discord';
    this.onClick = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  clickBtn() {
    this.onClick.emit();
  }

}
