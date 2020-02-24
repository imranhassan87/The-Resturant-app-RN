class Meal {
    constructor(id,
        categoaryIds,
        title,
        affordability,
        complexity,
        imgUrl,
        duration,
        ingrediants,
        steps,
        SugarFree,
        Veg,
        nonVeg,
        isLactoseFree
    ) {
        this.id = id
        this.categoaryIds = categoaryIds
        this.title = title
        this.affordability = affordability
        this.complexity = complexity
        this.imgUrl = imgUrl
        this.duration = duration
        this.ingrediants = ingrediants
        this.steps = steps
        this.SugarFree = SugarFree
        this.Veg = Veg
        this.nonVeg = nonVeg
        this.isLactoseFree = isLactoseFree
    }
}

export default Meal