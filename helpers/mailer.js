const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";

const auth = new OAuth2(
  "820266844863-ukgtube9fclltkeb87o80o44jipsj02g.apps.googleusercontent.com",
  "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",
  process.env.MAILING_REFRESH,
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: process.env.MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL,
      clientId:
        "820266844863-ukgtube9fclltkeb87o80o44jipsj02g.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken: process.env.MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: "myBook email verification",
    html: `<div style="padding:20px 30px 20px 20px">
    <img src="https://res.cloudinary.com/dakda5ni3/image/upload/v1679579446/lax84nozmki54pibxhjd.png" style="height:70px;width:70px;background-color:black;padding:10px;margin-bottom:15px;border-radius:50%" />
    <div style="width:300px">
    <p style="color:#000f52;font-size:large;font-weight:800;margin-bottom:15px">
    This email is to verify it's you... If you have created an account in
    myBook then please confirm by clicking this button below.
    </p>
    </div>
    <button style="background-color:#0a92bf;border:0;border-radius:9px;padding:5px 15px;color:white">
    <a href="${url}" style="text-decoration:none;color:inherit">
    confirm Your Email
    </a>
    </button>
    </div>`,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) {
      return err;
    }
    return res;
  });
};
