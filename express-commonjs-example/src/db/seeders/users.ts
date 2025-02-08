import { sql } from "drizzle-orm";
import bcrypt from "bcrypt";
import { db } from "src/db";

// example of hashPassword function
export const hashPassword = async (password: string) => {
  try {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    return hashedPassword;
  } catch (error) {
    throw error;
  }
};

async function seedUser() {
  const staticEmail = process.env.USER_EMAIL || "user@example.com";
  const staticPassword = process.env.USER_PASSWORD || "ExamplePassword123";

  const hashedPassword = await hashPassword(staticPassword);

  await db.execute(sql`
		INSERT INTO users (email, password)
		VALUES (${staticEmail}, ${hashedPassword})
		ON CONFLICT (email) DO NOTHING;
		`);
}

export default seedUser;
