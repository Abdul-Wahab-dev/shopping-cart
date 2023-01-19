/*
  Warnings:

  - You are about to drop the column `baseprice` on the `Price` table. All the data in the column will be lost.
  - Added the required column `basePrice` to the `Price` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Price" RENAME  COLUMN "baseprice" to "basePrice";
