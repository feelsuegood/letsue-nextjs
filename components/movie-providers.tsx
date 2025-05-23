import Link from "next/link";
import styles from "../styles/movie-providers.module.css";
// import { API_URL } from "../lib/constants";

interface Provider {
  provider_id: number;
  provider_name: string;
  logo_path: string;
  display_priority: number;
}

interface CountryData {
  link: string;
  buy: Provider[];
}

const API_URL = process.env.API_URL;

export async function getMovieProvider(id: string, country_code: string) {
  try {
    if (!id || !country_code) {
      throw new Error("Missing required parameters");
    }

    const response = await fetch(`${API_URL}/${id}/providers`);

    if (!response.ok) {
      throw new Error(`Failed to fetch providers: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Raw API Response:", data);

    if (!data || typeof data !== "object") {
      throw new Error("Invalid API response");
    }

    const normalizedCountryCode = country_code.toUpperCase();
    const countryData: CountryData = data[normalizedCountryCode];
    // console.log(countryData);

    if (!countryData) {
      console.error("No providers found for country:", normalizedCountryCode);
      console.error("Available countries:", Object.keys(data));
      throw new Error(
        `No providers found for country code: ${normalizedCountryCode}`,
      );
    }

    return countryData;
  } catch (error) {
    console.error("Error fetching movie providers:", error);
    throw error;
  }
}

export default async function MovieProvider({
  id,
  country_code,
}: {
  id: string;
  country_code: string;
}) {
  try {
    const countryData = await getMovieProvider(id, country_code);

    return (
      <div className={styles.container}>
        <Link href={`/movies/${id}`} className={styles.backLink}>
          &larr; Back to Movie
        </Link>
        <h2 className={styles.title}>
          <Link href={countryData.link} className={styles.backLink}>
            Streaming Providers in {country_code.toUpperCase()}
          </Link>
        </h2>
        <div className={styles.providersList}>
          {countryData.buy?.map((provider: Provider) => (
            <div key={provider.provider_id} className={styles.providerCard}>
              <img
                src={provider.logo_path}
                alt={provider.provider_name}
                className={styles.logo}
              />
              <h3 className={styles.providerName}>{provider.provider_name}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="error-container">
        <Link href={`/movies/${id}`}>&larr; Back to Movie</Link>
        <p className="error">
          {error instanceof Error ? error.message : "An error occurred"}
        </p>
      </div>
    );
  }
}
