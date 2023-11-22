    
import { SibApiV3Sdk } from 'sendinblue-api';
const defaultClient = SibApiV3Sdk.ApiClient.instance;
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = process.env.SENDINBLUE_API_KEY;


    
export async function sendEmail({ message }) {
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = { name: "abdulhashmi035@gmail.com", email: "abdulhashmi035@gmail.com" };
    sendSmtpEmail.to = [{ email: "abdulhashmi035@gmail.com" }];
    sendSmtpEmail.subject = "subject";
    sendSmtpEmail.htmlContent = message;
  
    try {
      await sendinblueClient.sendTransacEmail(sendSmtpEmail);
      console.log('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }
  
          
      
    