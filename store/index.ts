import { error } from 'console';
import { defineStore } from 'pinia';

export interface Breed {
    id: number,
    breed: string,
    src: string,
    isfavourit: boolean
}

interface State {
    breads: Breed[]
}
export const useStateStore = defineStore('state', () => {
   
    let breads: Breed[] = [
            {id: 1, breed: 'bolonka', src: '', isfavourit: false},
            {id: 2, breed: 'dog', src: '', isfavourit: false},
            {id: 3, breed: 'colli', src: '', isfavourit: true},
        ]

    let img = ref<string>('');
    let isLoading = ref(false);
    let isError = ref(false);

    const getData = async () => {
        try {
            isLoading.value = true
          const response: any = await fetch('https://dog.ceo/api/breeds/image/random')
          const data = await response.json()
            img.value = data.message;
            isLoading.value = false
            const resList = await fetch('https://dog.ceo/api/breeds/list/all')
            const datalist = await resList.json();
            console.log('list', datalist);
        } catch(error) {
            isError.value = true;
            console.log('Ошибка при получении данных', error);
        }
        
    }

    const getRandomPhoto = async (breed: string) => {
        try {
            
          const response: any = await fetch(`https://dog.ceo/api/breed/${breed}/image`)
          const data = await response.json()
            breads.push({id: 111, breed: breed, src: data.message, isfavourit: false})
           
            console.log('list', response.message);
        } catch(error) {
            
            console.log('Ошибка при получении данных', error);
        }
    }
    const setLocalStoradge = () => {
        localStorage.setItem('breads', JSON.stringify(breads))
    }
    
    const getFromLocalStoradge =() => {
        const result = localStorage.getItem('breads')
        if (result) {
            breads = JSON.parse(result)
        } else {
            setLocalStoradge()
        }
    }

    
    return {
        breads,
        setLocalStoradge,
        getFromLocalStoradge,
        getData,
        img,
        isLoading,
        isError
    }
        
}

)