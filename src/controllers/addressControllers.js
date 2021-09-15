const models = require('../models');
const { fetchAddress } = require('../utils/api');

const getAddressByCp = async (req, res) => {
  const { cp } = req.params;
  try {
    let address = await models.Address.findOne({ cp });

    if (!address) {
      const newAddress = await fetchAddress(cp);
      address = await saveAddress(newAddress);
    }

    return res.status(200).json(address);
  } catch (error) {
    return res.status(500).json({
      error: "Error searching for cep " + err,
    });
  }
};

const getAllCps = async (req, res) => {
  try {
    const response = await models.Address.find();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      error: "Error searching for cep " + err,
    });
  }
}

const postCp = async (req, res) => {
  const values = req.body;
  try {

    const newCp = new models.Address(values);
    const result = await newCp.save();

    if (!result) {
      return res.status(404).json({
        error: "Error " + err,
      });
    }

    return res.status(200).json(result);

  } catch (error) {
    return res.status(500).json({
      error: "Error posting cp",
    });
  }
};


const saveAddress = async (newAddress) => {
  newAddress.cp = newAddress.cp.replace('-', '');
  const addressToSave = new models.Address(newAddress);

  return await addressToSave.save();
}


module.exports = {
  getAddressByCp,
  getAllCps,
  postCp
};