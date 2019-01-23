import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";
import { Camera, CameraOptions } from "@ionic-native/camera";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";

/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-feedback",
  templateUrl: "feedback.html"
})
export class FeedbackPage {
  name = "";
  phone_number = "";
  message = "";
  currentImage = null;
  disableSendButton = false;
  sendButtonText = "Send Email";
  feedMessage = "";
  email = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private camera: Camera,
    private emailComposer: EmailComposer,
    private sanitizer: DomSanitizer
  ) {}

  captureImageFromGallery() {
    const options: CameraOptions = {
      quality: 10,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    };

    this.camera.getPicture(options).then(
      imageData => {
        this.currentImage = imageData;
      },
      err => {
        // Handle error
      }
    );
  }

  // TODO: Add support for taking picture and shearing
  // captureImageFromCamera() {
  //   const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     targetWidth: 100,
  //     targetHeight: 100,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     saveToPhotoAlbum: true,
  //     correctOrientation: true
  //   };

  //   this.camera.getPicture(options).then(
  //     imageData => {
  //       // imageData is either a base64 encoded string or a file URI
  //       // If it's base64 (DATA_URL):
  //       let cameraImage = "data:image/jpeg;base64," + imageData;
  //       this.pictureTakenMessage =
  //         "Picture taken and saved to gallery, please select the image from gallery to attach it";
  //       console.log(cameraImage);
  //     },
  //     err => {
  //       // Handle error
  //     }
  //   );
  // }

  getImgContent(): SafeUrl {
    console.log("From getImgContent method " + this.currentImage);
    return this.sanitizer.bypassSecurityTrustUrl(this.currentImage);
  }

  sendEmail() {
    // Formating the message body
    let fullMessage =
      "Name: " +
      this.name +
      "<br><br>" +
      "Phone Number: " +
      this.phone_number +
      "<br><br>" +
      "Message: " +
      this.message;

    // Setting alias for gmail app.
    this.emailComposer.addAlias("gmail", "com.google.android.gm");

    // Checking if there is an attachment to the email
    if (this.currentImage !== null) {
      this.email = {
        app: "gmail",
        to: "enquiry@prohealthhmo.com",
        cc: "operations@prohealthhmo.com",
        attachments: [this.currentImage],
        subject: "Feedback from mobile app",
        body: fullMessage,
        isHtml: true
      };
    } else {
      this.email = {
        app: "gmail",
        to: "enquiry@prohealthhmo.com",
        cc: "operations@prohealthhmo.com",
        subject: "Feedback from mobile app",
        body: fullMessage,
        isHtml: true
      };
    }
    // Checking if the form fields are blank
    if (this.name !== "" && this.phone_number !== "" && this.message !== "") {
      this.disableSendButton = true;
      this.sendButtonText = "Email sent!";
      this.feedMessage = "Email has been sent.";

      this.emailComposer.open(this.email);
    } else {
      this.feedMessage = "Please fill all form fields.";
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FeedbackPage");
  }
}
