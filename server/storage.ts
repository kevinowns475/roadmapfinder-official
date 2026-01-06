import { contactSubmissions, type InsertContact } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContactSubmission(contact: InsertContact): Promise<typeof contactSubmissions.$inferSelect>;
}

export class DatabaseStorage implements IStorage {
  async createContactSubmission(contact: InsertContact): Promise<typeof contactSubmissions.$inferSelect> {
    const [submission] = await db.insert(contactSubmissions).values(contact).returning();
    return submission;
  }
}

export const storage = new DatabaseStorage();
