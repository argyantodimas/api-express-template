import mainModel from "../models/mainModel";

const mainController = {
  test: (req, res) => {
    const data = mainModel.test();
    return res.status(200).send({ data });
  },
};

export default mainController;
