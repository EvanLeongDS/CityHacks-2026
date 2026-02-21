import { readPanoramicGeoJSON } from "@/lib/geojson";
import PanoramicViewer from "./panoramic-viewer";

export default async function PanoramicView({ ...props }) {
  const data = await readPanoramicGeoJSON("brookline-panoramic.geojson");

  return (
    <>
      <PanoramicViewer data={data} />
    </>
  );
}
