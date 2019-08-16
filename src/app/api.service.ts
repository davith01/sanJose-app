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
	  
	  if(true) {
		  const data = [{"title": "Te invitamos a que llenes el siguiente formulario","subtitle": "Segundo Remate NELORE CICLO CORTO","url": "https://docs.google.com/forms/d/e/1FAIpQLScewGPhVRVvH9bAzSuEYgLeuRk5uEwQ_5ALptIZbeWM5MSWCQ/viewform?vc=0&c=0&w=1"}]
		  resolve({'data': data,'error':null});
	  }
      
	  fileTransfer.download(url, this.file.dataDirectory + fileName)
      .then((entry) => {
		  this.file.readAsText(this.file.dataDirectory, fileName)
          .then(text => {
            // return data success
			try {
			    resolve({'data': null,'error':text});
			} catch(e) {
				resolve({'data': null,'error':e});
			}
          })
          .catch(err => {
			  resolve({'data': null,'error':err});
		  });
          
      }, (error) => {
        // handle error
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
