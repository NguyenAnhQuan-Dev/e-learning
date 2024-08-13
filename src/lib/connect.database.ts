"use serve";
import mongoose from "mongoose";

class DataBase {
  constructor() {
    this.connect();
  }
  private static instance: DataBase;
  private async connect() {
    const url: string = process.env.URL_DB || "";
    try {
      await mongoose.connect(url, { dbName: "e-learning" });
      console.log("Connect Success");
    } catch (error) {
      console.log("ERROR ::", error);
    }
  }

  public static getDataBase(): DataBase {
    if (!this.instance) {
      this.instance = new DataBase();
    }
    return this.instance;
  }
}

export default DataBase;
