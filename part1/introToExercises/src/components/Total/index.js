function Total (course) {
    const getValues = course.course.parts
    return <p>Number of exercises {getValues[0].exercises + getValues[1].exercises + getValues[2].exercises}</p>
}

export default Total