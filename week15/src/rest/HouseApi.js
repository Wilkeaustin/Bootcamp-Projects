const HOUSES_ENPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HouseApi {
    get = async () => {
        try {
            const resp = await fetch(HOUSES_ENPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchHouses had an issue', e);
        }
    }

    put = async (house) => {
        try {
            const resp = await fetch(`${HOUSES_ENPOINT}/${house.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(house)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating Houses ran into a problem.', e);
        }
    }
}

export const houseApi = new HouseApi();
