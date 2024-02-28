const emailjs = require('@emailjs/nodejs');
require('dotenv').config()

exports.email = async (req, res) => {

  try {

    const templateParams = {
      name : "Nipun Hedaoo",
          from_name: req.body.from_name,
          email: req.body.email,
          message: req.body.message,
  };

  
  emailjs.init({
    publicKey: process.env.EMAILJS_PUBLICKEY,
    privateKey: process.env.EMAILJS_PRIVATEKEY,
  });
  
  emailjs
    .send(process.env.SERVICE_ID,  process.env.TEMPLATE_ID, templateParams, {
      publicKey: process.env.EMAILJS_PUBLICKEY,
      privateKey: process.env.EMAILJS_PRIVATEKEY,
    })
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        return res.json({response})
      },
      (err) => {
        console.log('FAILED...', err);
        return res.json({err})
      
      },
    ).catch((err) => {
      console.log('FAILED...', err);
      return res.json({response})
    });
    
  } catch (err) {
    console.log('FAILED...', err);
    return res.json({err})
  }

        
}