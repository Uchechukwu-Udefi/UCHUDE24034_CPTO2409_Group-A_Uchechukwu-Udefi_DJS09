// Classes
import { Reviews } from './interfaces';

export default class MainProperty {
    src: string
    title: string
    reviews: Reviews[]
    constructor(src: string, title: string, reviews: Reviews[]) {
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}