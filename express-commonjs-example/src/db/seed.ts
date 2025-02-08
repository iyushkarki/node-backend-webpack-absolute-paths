import seedUser from "src/db/seeders/users";

const main = async () => {
  try {
    await seedUser();
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

main();
