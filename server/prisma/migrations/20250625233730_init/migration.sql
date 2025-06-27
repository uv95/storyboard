/*
  Warnings:

  - A unique constraint covering the columns `[storyboardId,order]` on the table `Scene` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Scene" DROP CONSTRAINT "Scene_storyboardId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Scene_storyboardId_order_key" ON "Scene"("storyboardId", "order");

-- AddForeignKey
ALTER TABLE "Scene" ADD CONSTRAINT "Scene_storyboardId_fkey" FOREIGN KEY ("storyboardId") REFERENCES "Storyboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;
