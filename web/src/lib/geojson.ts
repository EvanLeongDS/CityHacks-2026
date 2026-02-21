import { PanoramicGeoJSON } from "@/types/geojson";
import { promises as fs } from "fs";
import path from "path";

export async function readPanoramicGeoJSON(filename: string) {
  const filepath = path.join(process.cwd(), "data", filename);
  const fileContents = await fs.readFile(filepath, "utf8");
  const data = JSON.parse(fileContents);
  return data.features.map(
    (feature: any) => feature.properties,
  ) as PanoramicGeoJSON[];
}
