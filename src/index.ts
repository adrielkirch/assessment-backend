import express from "express";
import { Application } from "./app"; // Update the file path as needed
import { config } from "dotenv";
import MongoDb from "./database/mongodb";
import cors from "cors";

class AssessmentNous {
  public static async start() {
    config(); // Load environment variables from .env file
    console.info("Starting...");

    await MongoDb.connect();

    const app = new Application();

    await app.init();

    const port = process.env.PORT || 3030;

    const environment = process.env.NODE_ENV || "development";

    app.express.listen(port).on("listening", () => {
      console.info(
        "*****************************************************************************"
      );
      console.info(
        `**                         ASSESSMENT NOUS                                 **`
      );
      console.info(
        `** Server ${environment} started - listening on ${port}                                      **`
      );
      console.info(
        "*****************************************************************************"
      );
    });

    app.express.on("error", (err) => {
      console.error("Error starting server:", err);
    });
  }
}

AssessmentNous.start();
