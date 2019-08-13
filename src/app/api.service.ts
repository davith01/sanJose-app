import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
    public transfer: FileTransfer, 
    public file: File,
	public toastCtrl: ToastController
  ) { }
  
  getForms() {
    return new Promise(resolve => {
      // Download a file:
      const url = 'https://www.googleapis.com/drive/v3/files/1wHXbCHaFVm12GrutjJZiiqfhqs6bt5_I?key=AIzaSyACCBapjQh9JaSq05IG-cNYl4Iuaqox6No';
      const fileTransfer: FileTransferObject = this.transfer.create();
      const fileName = 'file_dom_forms.json';
      
	  fileTransfer.download(url, this.file.dataDirectory + fileName)
      .then((entry) => {
		  this.file.readAsText(this.file.dataDirectory, fileName)
          .then(text => {
            // return data success
			this.showMessage('sucess '+JSON.stringify(text));
            resolve({'data': text,'error':null});
          })
          .catch(err => {
			  this.showMessage('error '+JSON.stringify(err));
			  resolve({'data': null, 'error': err});
		  });
          
      }, (error) => {
        // handle error
		this.showMessage('handle error '+JSON.stringify(error));
        resolve({'data': null, 'error':error});
      });
    });
  }
    
  getVideos() {
    const url = '';
    return new Promise(resolve => {
       this.http.get(url)
       .subscribe((result) => {
       resolve(result);
       }, error  => {
       resolve({error:error});
       });
    });
  }
  
  async showMessage(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
}
