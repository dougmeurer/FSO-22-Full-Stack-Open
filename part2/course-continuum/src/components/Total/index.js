function Total ({cCourse}) {

    const initialValue = 0
    const total = cCourse.parts.reduce((pV, cV) => pV + cV.exercises, initialValue)

    return <p>Number of exercises {total}</p>  
}

export default Total