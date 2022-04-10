import { useAuth0 } from "@auth0/auth0-react";

export const getJobs = async (user, isAuthenticated, getAccessTokenSilently) => {

    if (user && user.sub) {

        const domain = "dev-1kob6syu.us.auth0.com";

        try {
            const accessToken = await getAccessTokenSilently({
                audience: `https://${domain}/api/v2/`,
                scope: "read:current_user",
            });

            // const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
            
            const mmLambosJobsUrl = `http://localhost:3001/dev/jobs`;

            const metadataResponse = await fetch(mmLambosJobsUrl, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            
            const jobs = await metadataResponse.json();

            return jobs;

        } catch (e) {
            console.log(e.message);
        }

    }
    else {
        console.log('no user...')
    }

}

export const getJobs2 = () => {
    return Promise.resolve('hello')
}

export const foo = () => {
    return Promise.resolve('hello')
}