const { google } = require("googleapis");
const nodemailer = require("nodemailer");
require("dotenv").config();

/*POPULATE BELOW FIELDS WITH YOUR CREDETIALS*/

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const REDIRECT_URI = "https://interchange-production.up.railway.app/";
const MY_EMAIL = "institutointerchange@gmail.com";

/*POPULATE ABOVE FIELDS WITH YOUR CREDETIALS*/
//a
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

// Función para enviar el correo electrónico
const sendEmailNotificationRegister = async (newUserEmail) => {
  try {
    const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "institutointerchange@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "institutointerchange@gmail.com",
      to: newUserEmail,
      subject: "¡Bienvenido Interchange!",
      html: `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <title>Bienvenido a Interchange</title>
          <style>

          .button {
              display: inline-block;
              padding: 10px 20px;
              border-radius: 30px; 
              background-color: yellow; 
              color: black; 
              text-decoration: none;
              transition: transform 0.3s ease; 
          }
  
          .button:hover {
              transform: translateY(-2px); /* Desplazamiento hacia arriba */
          }
      </style>
      </head>
      
      <body style="font-family: Arial, sans-serif;">
      
          <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5;">
              <tr>
                  <td align="center">
                      <table cellpadding="0" cellspacing="0" width="600" style="margin: 20px 0; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                          <tr>
                              <td style="padding: 40px 20px; text-align: center;">
                                  <img src="https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/299023767_480174664115023_6334146979410293629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=2wc1b-hDYgIAX9eLTzk&_nc_ht=scontent.fros2-1.fna&oh=00_AfAnLO6sOc0bortes0PjUJj--DQVWOdVV68TezDIgySEeA&oe=658BA3AE" alt="Logo del Instituto" width="150" style="display: block; margin: 0 auto 20px;">
                                  <h1 style="color: #333333; font-size: 24px; margin: 0;">¡Bienvenido a Interchange!</h1>
                                  <p style="color: #666666; font-size: 16px;">Hola ${newUserEmail},</p>
                                  <p style="color: #666666; font-size: 16px;">🌻 Gracias por registrarte en nuestra plataforma. 🌻</p>
                                  <p style="color: #666666; font-size: 16px;">¡Es un placer tenerte aquí!</p>
                                  <a href="https://interchange-eight.vercel.app/" class="button">Ir a la página principal</a>
                        </td>                            
                                  </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      
      </body>
      
      </html>
      
    `,
    };
    const info = await transport.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
};

const sendEmailNotificationCurso = async (newUserEmail, Grado_Nombre, Grado_Categoria) => {
  try {
    const ACCESS_TOKEN = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "institutointerchange@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const mailOptions = {
      from: "institutointerchange@gmail.com",
      to: newUserEmail,
      subject: `¡Bienvenido ${Grado_Nombre} - ${Grado_Categoria} en Interchange !`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <title>¡Bienvenido ${Grado_Nombre} - ${Grado_Categoria} en Interchange !</title>
          <style>

          .button {
              display: inline-block;
              padding: 10px 20px;
              border-radius: 30px; 
              background-color: yellow; 
              color: black; 
              text-decoration: none;
              transition: transform 0.3s ease; 
          }
  
          .button:hover {
              transform: translateY(-2px); /* Desplazamiento hacia arriba */
          }
      </style>
      </head>
      
      <body style="font-family: Arial, sans-serif;">
      
          <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5;">
              <tr>
                  <td align="center">
                      <table cellpadding="0" cellspacing="0" width="600" style="margin: 20px 0; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                          <tr>
                              <td style="padding: 40px 20px; text-align: center;">
                                  <img src="https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/299023767_480174664115023_6334146979410293629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=2wc1b-hDYgIAX9eLTzk&_nc_ht=scontent.fros2-1.fna&oh=00_AfAnLO6sOc0bortes0PjUJj--DQVWOdVV68TezDIgySEeA&oe=658BA3AE" alt="Logo del Instituto" width="150" style="display: block; margin: 0 auto 20px;">
                                  <h1 style="color: #333333; font-size: 24px; margin: 0;">¡Bienvenido ${Grado_Nombre} - ${Grado_Categoria} en Interchange !</h1>
                                  <p style="color: #666666; font-size: 16px;">Hola ${newUserEmail},</p>
                                  <p style="color: #666666; font-size: 16px;">Has sido asignado a  ${Grado_Nombre} - ${Grado_Categoria} por el Instituto Interchange</p>
                                  <p style="color: #666666; font-size: 16px;">¡Es un placer tenerte aquí!</p>
                                  <a href="https://interchange-eight.vercel.app/" class="button">Ir a la página principal</a>
                        </td>                            
                                  </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      
      </body>
      
      </html>
      
    `,
    };
    const info = await transport.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
};

const sendEmailNotificationVencimiento = async (newUserEmail) => {
  try {
    const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "institutointerchange@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "institutointerchange@gmail.com",
      to: newUserEmail,
      subject: `¡Interchange desea recordarte que tenes una cuota vencida!`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <title>Hola ${newUserEmail} !</title>
          <style>

          .button {
              display: inline-block;
              padding: 10px 20px;
              border-radius: 30px; 
              background-color: yellow; 
              color: black; 
              text-decoration: none;
              transition: transform 0.3s ease; 
          }
  
          .button:hover {
              transform: translateY(-2px); /* Desplazamiento hacia arriba */
          }
      </style>
      </head>
      
      <body style="font-family: Arial, sans-serif;">
      
          <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5;">
              <tr>
                  <td align="center">
                      <table cellpadding="0" cellspacing="0" width="600" style="margin: 20px 0; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                          <tr>
                              <td style="padding: 40px 20px; text-align: center;">
                                  <img src="https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/299023767_480174664115023_6334146979410293629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=2wc1b-hDYgIAX9eLTzk&_nc_ht=scontent.fros2-1.fna&oh=00_AfAnLO6sOc0bortes0PjUJj--DQVWOdVV68TezDIgySEeA&oe=658BA3AE" alt="Logo del Instituto" width="150" style="display: block; margin: 0 auto 20px;">
                                  <h1 style="color: #333333; font-size: 24px; margin: 0;">¡Hola ${newUserEmail} !</h1>
    
                                  <p style="color: #666666; font-size: 16px;">Por favor, comunicate con la administración del instituto para regular el saldo de la cuota vencida</p>
                                  <p style="color: #666666; font-size: 16px;">¡Para nosotros es un placer tenerte aquí!</p>
                                  <a href="https://interchange-eight.vercel.app/" class="button">Ir a la página principal</a>
                        </td>                            
                                  </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      
      </body>
      
      </html>
      
    `,
    };
    const info = await transport.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
};

const sendEmailPreInscripcion = async (newUserEmail, formData) => {
  try {
    const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "institutointerchange@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "institutointerchange@gmail.com",
      to: "institutointerchange@gmail.com",
      subject: `¡Nueva consulta de pre-inscripcion!`,
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Detalles de Preinscripción</title>
          <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
          }
          h1 {
            color: #007bff;
          }
          p {
            margin-bottom: 10px;
          }
          
        </style>
      </head>
        <body>
        <h1>Detalles de Preinscripción</h1>
          <p>Nombre del adulto responsable: ${formData.floating_first_name} ${formData.floating_last_name}</p>
          <p>Nombre del estudiante: ${formData.floating_first_namestudent} ${formData.floating_last_namestudent}</p>
          <p>Fecha de Nacimiento del estudiante: ${formData.floating_date_of_birth}</p>
          <p>Teléfono del estudiante: ${formData.floating_phone_numberstudent}</p>
          <p>Dirección del estudiante: ${formData.floating_addressstudent}</p>
          <p>Grado seleccionado: ${formData.select_title}</p>
          <p>Email de contacto: ${formData.floating_email}</p>
          <p>Teléfono de contacto: ${formData.floating_phone}</p>
          <p>Mensaje: ${formData.floating_message}</p>
        </body>
      </html>
    `,
    };
    const info = await transport.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
};

const sendEmailAcuerdoinstitucional = async (EmailAdulto) => {
  try {
    const ACCESS_TOKEN = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "institutointerchange@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: ACCESS_TOKEN,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "institutointerchange@gmail.com",
      to: EmailAdulto,
      subject: `¡Acuerdo institucional Interchange!`,
      html: `
      <!DOCTYPE html>
      <html lang="en">
      
      <head>
          <meta charset="UTF-8">
          <title>Hola ${EmailAdulto} !</title>
          <style>

          .button {
              display: inline-block;
              padding: 10px 20px;
              border-radius: 30px; 
              background-color: yellow; 
              color: black; 
              text-decoration: none;
              transition: transform 0.3s ease; 
          }
  
          .button:hover {
              transform: translateY(-2px); /* Desplazamiento hacia arriba */
          }
      </style>
      </head>
      
      <body style="font-family: Arial, sans-serif;">
      
          <table cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f5f5;">
              <tr>
                  <td align="center">
                      <table cellpadding="0" cellspacing="0" width="600" style="margin: 20px 0; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                          <tr>
                              <td style="padding: 40px 20px; text-align: center;">
                                  <img src="https://scontent.fros2-1.fna.fbcdn.net/v/t39.30808-6/299023767_480174664115023_6334146979410293629_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=2wc1b-hDYgIAX9eLTzk&_nc_ht=scontent.fros2-1.fna&oh=00_AfAnLO6sOc0bortes0PjUJj--DQVWOdVV68TezDIgySEeA&oe=658BA3AE" alt="Logo del Instituto" width="150" style="display: block; margin: 0 auto 20px;">
                                  <h1 style="color: #333333; font-size: 24px; margin: 0;">¡Hola ${EmailAdulto} !</h1>
    <h2>Acuerdo institucional Interchange Instutute</h2>
          <p>Les acercamos este link del formulario de acuerdo de confirmidad institucional para ser firmado digitalmente a la brevedad por el alumno o adulto responsable</p>
          <p>Tener a consideración que la persona que firme el documento debe ser mayor de edad obligatoriamente</p>
          <p>https://docs.google.com/forms/d/e/1FAIpQLSerXkA1OJNZANWGy5uI6Vy8oxG7F6uhvS6-h9PzkdY0RwZy9A/viewform</p>
                               
                                  <a href="https://interchange-eight.vercel.app/" class="button">Ir a la página principal</a>
                        </td>                            
                                  </td>
                          </tr>
                      </table>
                  </td>
              </tr>
          </table>
      
      </body>
      
      </html>
      
    `,
    };
    const info = await transport.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw new Error(`Error sending email: ${error}`);
  }
};

module.exports = {
  sendEmailNotificationRegister,
  sendEmailNotificationCurso,
  sendEmailNotificationVencimiento,
  sendEmailPreInscripcion,
  sendEmailAcuerdoinstitucional,
};
