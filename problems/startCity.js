function validStartingCity(distances, fuel, mpg) {
    const cities = distances.length;

    for(let i = 0; i < cities.length; i++){
        let milesLeft = 0;
        for(let j = i; j< i + cities; j++){
            if(milesLeft < 0) continue;

            const cityFlip = j%cities;
            const fuelFromCity = fuel[cityFlip];
            const nextDistance = distances[cityFlip];
            milesLeft += fuelFromCity * mpg - nextDistance;
        }
        if(milesLeft >= 0) return i;
    }
    return -1;
  }