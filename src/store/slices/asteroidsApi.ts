import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Asteroid } from '../../classes/asteroid'

export const asteroidsApi  = createApi({
    reducerPath: 'asteroidsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.nasa.gov/neo/rest/v1/'}),
    endpoints: (builder) => ({
        getAsteroidsList: builder.query<Asteroid[], null>({
            query: () => `neo/browse?api_key=DEMO_KEY`,
            transformResponse: (response: any) => {
                let parsedData: Asteroid[] = [];

                // check did response data format is valid
                if (response && Array.isArray(response.near_earth_objects)) {
                    response.near_earth_objects.forEach((asteroid: any) => {

                        // find next asteroid approach date
                        let nextApproachDateId = asteroid.close_approach_data.findIndex((approachDate: any) => {
                            return new Date().getTime() <= new Date(approachDate.close_approach_date_full).getTime()
                        });

                        let nextTimeWillBeNearEarthDate: string | null = null;
                        let nextTimeWillBeNearEarthDistance: number | null = null;
                        let lastTimeWasNearEarthDate: string | null = null;
                        let lastTimeWasNearEarthDistance: number | null = null;

                        if (nextApproachDateId !== -1) {
                            nextTimeWillBeNearEarthDate = asteroid.close_approach_data[nextApproachDateId].close_approach_date_full;
                            nextTimeWillBeNearEarthDistance = asteroid.close_approach_data[nextApproachDateId].miss_distance.kilometers;
                            if (nextApproachDateId !== 0) {
                                lastTimeWasNearEarthDate = asteroid.close_approach_data[nextApproachDateId - 1].close_approach_date_full;
                                lastTimeWasNearEarthDistance = asteroid.close_approach_data[nextApproachDateId - 1].miss_distance.kilometers;
                            }
                        }

                        parsedData.push(new Asteroid(
                            asteroid.id,
                            asteroid.name,
                            asteroid.absolute_magnitude_h,
                            asteroid.estimated_diameter.kilometers.estimated_diameter_min,
                            asteroid.estimated_diameter.kilometers.estimated_diameter_max,
                            asteroid.is_potentially_hazardous_asteroid,
                            nextTimeWillBeNearEarthDate,
                            nextTimeWillBeNearEarthDistance,
                            lastTimeWasNearEarthDate,
                            lastTimeWasNearEarthDistance
                        ));
                    })
                }

                return parsedData;
            }
        }),
    })
})

export const { useGetAsteroidsListQuery } = asteroidsApi;
