import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'cs-header',
  templateUrl: './cs-header.component.html',
  styleUrls: ['./cs-header.component.css']
})
export class CsHeaderComponent implements OnInit {

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
