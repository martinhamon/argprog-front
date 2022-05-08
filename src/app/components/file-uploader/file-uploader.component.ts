import { Component, EventEmitter, OnInit } from '@angular/core';
import { ImageuploadService } from 'src/app/services/imageupload.service';





@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css'],

})

export class FileUploaderComponent implements OnInit {
selectedFile : File | undefined  ;
succes : boolean = false

constructor(private imageUploadService : ImageuploadService){

}

  ngOnInit(): void {


  }

  onFileSelectedChange(event : any){
      this.selectedFile =<File> event.target.files[0]
  }
  onUpload(){

    const fd = new FormData()
    fd.append("file",<File>this.selectedFile, this.selectedFile?.name)
     this.imageUploadService.uploadImage(fd)
     .subscribe(res =>
      {
        console.log("Respuesta:  "+ res.fileDownloadUri)
        this.succes = res.fileDownloadUri? true : false
      })
  }

}
