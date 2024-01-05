import Controller from ".";
import { catchError } from "../middleware/catchError";
import { UploadedFile } from "express-fileupload";
import Produc from "./../model/Produc";

class ProducController extends Controller {
  constructor() {
    super(Produc);
  }

  public img() {
    return catchError(async (req, res) => {
      if (req.files) {
        const file = req.files.img as UploadedFile;

        if (file.mimetype == `image/png` || file.mimetype == `image/jpeg`) {

            //guardarimagen
          
          
            console.log("hola imagen");

          file.mv(`./uploads/${file.name}`, (err) => {
            if (err) return res.status(500).send({ message: err });
          });

        }

        console.log(file);
      }
    });
  }
}
/*

imagenes{

}
*/

export default ProducController;
