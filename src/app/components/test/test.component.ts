import { Component } from '@angular/core';
import { musicien } from '../../models/musicien';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  musiciens! : musicien[];
  formGroup : FormGroup = this._formBuilder.group({
    mic1 : [null],
    mic2 : [null],
  });

  get mic1() : AbstractControl | null { return this.formGroup.get('mic1') };
  get mic2() : AbstractControl | null { return this.formGroup.get('mic2') };

  constructor(private readonly _formBuilder:FormBuilder)
  {    
  }

  ngOnInit()
  {
    this.musiciens = [
      { name: 'Michael Jackson' },
      { name: 'Cindy Lauper' },
      { name: 'Georges Michael' },
    ]
  }

  public filtredElement(musiciens:musicien[], inputName:string) : musicien[]
  {    
    let selectedMusicians : string[] = [];

    for (const iterator of Object.keys(this.formGroup.value) ) 
    {
      if(iterator != inputName && this.formGroup.value[iterator] != "")
      {
        selectedMusicians.push(this.formGroup.value[iterator])
      }
    }

    if(!musiciens){
      return []
    }
    return musiciens.filter(x => !selectedMusicians.includes(x.name))
  }

  public done()
  {
    console.log(this.formGroup);
  }
}
