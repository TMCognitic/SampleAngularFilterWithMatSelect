import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ContentObserver } from '@angular/cdk/observers';
import { content } from '../../models/content';

@Component({
  selector: 'app-testapi',
  templateUrl: './testapi.component.html',
  styleUrl: './testapi.component.css'
})
export class TestapiComponent {
  values! : content[]

  constructor(private _service:ApiService)
  {

  }

  ngOnInit(): void
  {
    this._service.get().subscribe(
      {
        next: (data) => this.values = data,
        error: (e) => console.log(e),
        complete : () => console.log('Get Values completed!!!')
      }
    );
  }

  public send() : void
  {
    console.log("send called!")
    this._service.post('Etienne').subscribe(
      {
        next: (content) =>
        {
          console.log(content.value + " a ete insérée"),
          this.values.push(content)        
        }, 
        error : (e) => console.log(e)
      }
    )
  }
}
