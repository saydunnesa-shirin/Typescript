import type { PackageDetails } from "../../api/types/packageDetails";
import { getFeaturedPackages } from "../../api/queries/getFeaturedPackages";

export interface HomeLoaderResult {
  featurePackages: PackageDetails[];
}

export async function homeLoader(): Promise<HomeLoaderResult>{
  const featurePackages = await getFeaturedPackages();

  return {
    featurePackages
  };
}