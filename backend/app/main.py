from fastapi import FastAPI
import geopandas as gpd
import json

app = FastAPI(title="CityHacks Backend")
brookline_rollup_data = gpd.read_file("rollup.geojson")
brookline_pavements_data = gpd.read_file("pavements.geojson")

@app.get("/")
def read_root() -> dict[str, str]:
    return {"message": "CityHacks backend is running"}


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}

# cost estimator function
def cost_estimator():
# based on the rating and the area plug everything into open ai api and let open ai figure out the costs
    pass