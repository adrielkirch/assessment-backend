import express from 'express';
import { Application } from "./app";
import { config } from 'dotenv';
import MongoDb from './database/mongodb';

class AssessmentNous {
  public static async start() {
    config();
    console.info('starting...');
    const port = process.env.PORT;
    const environment = process.env.NODE_ENV;

    try {
      await MongoDb.connect();

      const app = new Application();
      
      await app.init();
  
      app.express.listen(port, () => {
        console.info("*****************************************************************************");
        console.info(`**                         ASSESSMENT NOUS                                 **`);
        console.info(`** Server ${environment} started - listening on ${port}                                      **`);
        console.info("*****************************************************************************");
      }).on('error', (err) => {
        if (err) {
          return console.error(err);
        }
      });
    } catch (error) {
      console.error('Error starting AssessmentNous:', error);
      process.exit(1); 
    }
  }
}

AssessmentNous.start();
