import CelestialBodies from "@/src/app/mocks/celestial-bodies.json";

export async function getCelestialBodies() {
  try {
    return CelestialBodies.celestialBodies;
  } catch (error) {
    throw new Error("Error happened while fetching celestial bodies", error);
  }
}

export async function getCelestialBodyByName(name) {
  try {
    var CelestialBody = CelestialBodies.celestialBodies.find(
      (item) => item.name === name
    );
    return CelestialBody;
  } catch (error) {
    throw new Error(
      "Error happened while fetching celestial body by name",
      error
    );
  }
}
