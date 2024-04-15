import Chance from "chance";
const chance = new Chance();
export const fakeUserData=()=>{
    console.log( chance.name({ middle_initial: true }));
 return  chance.name({ middle_initial: true });
}

