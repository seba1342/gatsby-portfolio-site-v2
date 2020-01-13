/* eslint-disable func-names */
/* eslint-disable consistent-return */
const nodemailer = require(`nodemailer`);

require(`dotenv`).config();

const statusCode = 200;
const headers = {
  "Access-Control-Allow-Origin": `*`,
  "Access-Control-Allow-Headers": `Content-Type`
};

exports.handler = function(event) {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_PORT ||
    !process.env.SMTP_USERNAME
  ) {
    return {
      statusCode: 401,
      headers,
      body: `Required environment variables missing`
    };
  }

  if (event.httpMethod !== `POST`) {
    return {
      statusCode: 400,
      headers,
      body: `Method unsupported: ${event.httpMethod}`
    };
  }

  if (!event.body) {
    const message = `Required information missing`;

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        status: `failed`,
        message
      })
    };
  }

  const data = JSON.parse(event.body);

  async function sendMail(payload) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      }
    });

    //

    let text = ``;
    let html = ``;

    // eslint-disable-next-line no-console
    console.log(`Payload received: `, payload);

    Object.keys(payload).forEach(key => {
      if (
        key === `mailchimp` ||
        key === `studio` ||
        key === `upload_brief` ||
        key === `upload_cv` ||
        key === `upload_portfolio`
      ) {
        return;
      }

      text = `${text}${key}: ${payload[key].value}`;
      html = `${html}<p>${key}: ${payload[key].value}</p>`;
    });

    let enquiryText = `⚡️ Website Enquiry`;

    const lottery = Math.floor(Math.random() * 1000000 + 1);

    if (lottery === 66919) {
      enquiryText = `🔥 A NIGERIAN PRINCE OWES YOU $1000000`;
    }

    // eslint-disable-next-line no-unused-vars
    const info = await transporter.sendMail({
      from: `"${enquiryText}" <${process.env.SMTP_USERNAME}>`,
      to: process.env.MAIL_TARGET,
      subject: `<3 + $ Website Enquiry`,
      text,
      html: `<b>${html}</b>`
    });
  }

  sendMail(data).then(() => {
    return {
      statusCode,
      headers,
      body: JSON.stringify({
        status: `ok`,
        message: `Email sent successfully`
      })
    };
  });
};
