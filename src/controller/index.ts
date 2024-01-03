import { catchError } from "../middleware/catchError";

class Controller {
  private Schema: any;

  constructor(Schema: any) {
    this.Schema = Schema;
  }

  public create() {
    return catchError(async (req, res) => {
      const createData = new this.Schema(req.body);
      const saveDate = await createData.save();

      res.status(200).json({
        status: 200,
        code: 200,
        message: "data guardada",
        data: saveDate,
      });
    });
  }
}

export default Controller;
