const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";

const auth = new OAuth2(
  "820266844863-ukgtube9fclltkeb87o80o44jipsj02g.apps.googleusercontent.com",
  "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",
  "1//04flee5uToHi5CgYIARAAGAQSNwF-L9IrXcHTPdxAaFGbE0T_0bFUNUU24Y4xjkXhK5IIiXvY__mGJTgmU6lwPhJPAHihbZefakY",
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token:
      "1//04flee5uToHi5CgYIARAAGAQSNwF-L9IrXcHTPdxAaFGbE0T_0bFUNUU24Y4xjkXhK5IIiXvY__mGJTgmU6lwPhJPAHihbZefakY",
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: "akellasrinivas9944@gmail.com",
      clientId:
        "820266844863-ukgtube9fclltkeb87o80o44jipsj02g.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04flee5uToHi5CgYIARAAGAQSNwF-L9IrXcHTPdxAaFGbE0T_0bFUNUU24Y4xjkXhK5IIiXvY__mGJTgmU6lwPhJPAHihbZefakY",
      accessToken,
    },
  });
  const mailOptions = {
    from: "akellasrinivas9944@gmail.com",
    to: email,
    subject: "myBook email verification",
    html: `<div style="padding:20px 30px 20px 20px">
    <div style="height:70px;width:70px;padding:10px;margin-bottom:15px;border-radius:50%;background-color:black;display:flex;justify-content:center;align-items:center">
    <img alt="" src="https://res.cloudinary.com/dakda5ni3/image/upload/v1679579446/lfxjaoceul1sb1n65qd8.png" style="width:70%;height:70%;object-fit:cover" />
    </div>
    <div style="width:100%">
    <p style="color:#000f52;font-size:large;font-weight:800;margin-bottom:15px">
    ${name}, This email is to verify it's you... If you have created an
    account in myBook then please confirm by clicking this button below.
    </p>
    </div>
    <button style="background-color:#0a92bf;border:0;border-radius:9px;padding:5px 15px;color:white">
    <a href=${url} style="text-decoration:none;color:inherit">
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

exports.sendResetCode = (email, name, code) => {
  auth.setCredentials({
    refresh_token:
      "1//04flee5uToHi5CgYIARAAGAQSNwF-L9IrXcHTPdxAaFGbE0T_0bFUNUU24Y4xjkXhK5IIiXvY__mGJTgmU6lwPhJPAHihbZefakY",
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      type: "OAuth2",
      user: "akellasrinivas9944@gmail.com",
      clientId:
        "820266844863-ukgtube9fclltkeb87o80o44jipsj02g.apps.googleusercontent.com",
      clientSecret: "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",
      refreshToken:
        "1//04flee5uToHi5CgYIARAAGAQSNwF-L9IrXcHTPdxAaFGbE0T_0bFUNUU24Y4xjkXhK5IIiXvY__mGJTgmU6lwPhJPAHihbZefakY",
      accessToken,
    },
  });
  const mailOptions = {
    from: "akellasrinivas9944@gmail.com",
    to: email,
    subject: "myBook email verification",
    html: `<div style="padding:20px 30px 20px 20px">
    <div style="height:70px;width:70px;padding:10px;margin-bottom:15px;border-radius:50%;background-color:black;display:flex;justify-content:center;align-items:center">
    <img alt="" src="https://res.cloudinary.com/dakda5ni3/image/upload/v1679579446/lfxjaoceul1sb1n65qd8.png" style="width:70%;height:70%;object-fit:cover" />
    </div>
    <div style="width:100%">
    <p style="color:#000f52;font-size:large;font-weight:800;margin-bottom:15px">
    ${name}, This email is to provide you the code for resetting your password
    </p>
    </div>
    <button style="background-color:#0a92bf;border:0;border-radius:9px;padding:5px 15px;color:white">
    ${code}
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
