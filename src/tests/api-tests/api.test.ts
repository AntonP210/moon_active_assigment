import { get, post, auth } from '../../apiClient';
import { Category, Pet, Tag } from '../../types';

describe('Smoke Tests', () => {
    
    const petEndPoint = '/v2/pet';
    
    it('Should Get "Pet" ', async () => {
        const authResp =await auth();
        expect(authResp.status).toBe(200);

        const response = await get(petEndPoint+'/1');

        expect(response.status).toBe(200);
        expect(response.statusText).toBe("OK");
    });

    it('Should Post "New Pet"', async () => {
        
        const authResp =await auth();
        expect(authResp.status).toBe(200);

        const tags:Tag = {
            id:1,
            name:"JoJo"
        }

        const category:Category = {
            id: 1,
            name: "JoJo",
        }

        const newPet:Pet = {
            id:0,
            category:category,
            name: "JoJo",
            photoUrls: ["abc123"],
            tags:[tags],
            status: "available"
        }

        const response = await post(petEndPoint, newPet);
        expect(response.status).toBe(200);
        expect(response.statusText).toBe("OK");
    });

    
});
