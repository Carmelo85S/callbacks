const fetchData = (printName, printAge, printLocation, printHobby) => {
    console.log("Fetching data...")

    setTimeout (() => {
        const nameData = "My name is Carmelo";
        printName(nameData);

        setTimeout (() => {
            const ageData = "I am 40 years old";
            printAge(ageData);
        

            setTimeout (() => {
                const locationData = "I was born in Sardinia but i live in Sweden"
                printLocation(locationData);
            

                setTimeout (() => {
                    const hobbyData = "My hobbies are do activities with my family, dance with my kids, photo and coding"
                    printHobby(hobbyData);
                },1000);
                
            },1000);
        
        }, 1000);

    }, 1000);
}


const printName = (nameData) => {
    console.log(nameData)
}

const printAge = (ageData) => {
    console.log(ageData);
}

const printLocation = (locationData) => {
    console.log(locationData)
}

const printHobby = (hobbyData) => {
    console.log(hobbyData);
}

fetchData(printName, printAge, printLocation, printHobby);
