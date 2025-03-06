import { defineStore } from 'pinia';

export interface Breed {
    id: number,
    breed: string,
    src: string,
    isFavourit: boolean
}

interface State {
    breeds: Breed[]
}
export const useStateStore = defineStore('state', () => {
   
    let breeds = ref<Breed[]>([])
    
    let isLoading = ref(false);
    let isError = ref(false);

    const getData = async () => {
        try {
            isLoading.value = true;
            isError.value = false;

            // Загружаем список пород
            const response = await fetch('https://dog.ceo/api/breeds/list/all');
            const data = await response.json();
            const breedsList = Object.keys(data.message);

            // Загружаем фотографии для каждой породы
            const breedPromises = breedsList.map(async (breed) => getRandomPhoto(breed));

            // Ожидаем завершения всех запросов
            const breedsData = await Promise.all(breedPromises);
            breeds.value = breedsData;
            setLocalStoradge();
        } catch (error) {
            isError.value = true;
            console.error('Ошибка при получении данных', error);
        } finally {
            isLoading.value = false;
        }
        
    }

    const getRandomPhoto = async (breed: string) => {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
        
        const data = await response.json();
        return {
            id: Math.random() * 1000, 
            breed,
            src: data.message,
            isFavourit: false,
        };
    }

    const setLocalStoradge = () => {
        localStorage.setItem('breeds', JSON.stringify(breeds.value))
    }
    
    const getFromLocalStoradge =() => {
        const result = localStorage.getItem('breeds')
        if (result) {
            breeds.value = JSON.parse(result)
        } else {
            setLocalStoradge()
        }
    }
    
    return {
        breeds,
        setLocalStoradge,
        getFromLocalStoradge,
        getData,        
        isLoading,
        isError
    }
        
}
// breeds.value = [
//     {id: 1, breed: 'bolonka', src: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_3201.jpg', isFavourit: false},
//     {id: 2, breed: 'dog', src: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_3201.jpg', isFavourit: false},
//     {id: 3, breed: 'colli', src: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_3201.jpg', isFavourit: true},
// ]
)