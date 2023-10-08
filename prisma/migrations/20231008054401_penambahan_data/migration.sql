/*
  Warnings:

  - Added the required column `gambar` to the `courses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kategori` to the `courses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `courses` ADD COLUMN `gambar` VARCHAR(191) NOT NULL,
    ADD COLUMN `kategori` INTEGER NOT NULL;
