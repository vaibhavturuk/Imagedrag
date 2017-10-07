
import { Component, TemplateRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataserviceService } from "./dataservice.service";

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myform:FormGroup;

  constructor(private formService: DataserviceService,private formBuilder: FormBuilder ) { }
posts:any

  ngOnInit() {
     this.myform = this.formBuilder.group({ 
      email: ['', Validators.required],
      Dob: ['', Validators.required],
      image: ['', Validators.required],

    });

return this.formService.getDataStudent().subscribe((posts) => {
            console.log(posts);
            this.posts = posts;
        });
  }


 
  get email(){
    return this.myform.get('email');
  }

 get Dob(){
    return this.myform.get('Dob');
  }
  get image(){
    return this.myform.get('image');
  }

  
 
Image:string;
img: string;
 submitForm(data)
        { 
            var res= new User
            {
                res.Image=this.img
                res.Email=data.email
                res.DOB=data.Dob
            }
              this.Image=this.img
            this.formService.create(res)
            .subscribe(
            data => {
              console.log(data);
            window.location.reload();
                },
            
            );
        }

//upload image
    onUploadFinished(event)
    {
     
       this.img=event.src;
    }
}
class User{
    public Image:string;
    public DOB:string;
    public Email:string;
}


























// import { Component, TemplateRef } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { FormService } from "./services/form.service";

// @Component({

//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   data: any;
//   image: string;
//   img: string;

//   complexForm: FormGroup;

//   constructor(private formService: FormService,
//     fb: FormBuilder) {
//     this.complexForm = fb.group({
//       'Image': [null, Validators.required],
//       'Email': [null, Validators.required],
//       'DOB': [null, Validators.required]
//     })
//   }

//   ngOnInit() {

//     this.formService.getDataStudent().subscribe((posts) => {
//       console.log(posts);
//       this.data = posts;
//       console.log(this.data);
//     });
//   }
//   OnClickSubmit(data) {
//     var res = new User
//     {
//       res.Image = this.img
//       res.Email = data.Email
//       res.DOB = data.DOB
//     }
//     this.image = this.img
//     this.formService.create(res)
//       .subscribe(
//       data => {
//         window.location.reload();
//       },
//     );
//   }
//   onUploadFinished(event) {
//     this.img = event.src
//   }
// }
// class User {
//   public Image: string;
//   public Email: string;
//   public DOB: string;

// }
