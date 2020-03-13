import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Oranges',10)
  ];
  //As we have define the type of the array also we create some object
  //Now lets display the above in out temlate file

  constructor() { }

  ngOnInit(): void {
  }

}
