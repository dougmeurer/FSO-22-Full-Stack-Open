function Content (course){
    return(<>
    {course.course.parts.map(cE => <p>{cE.name} {cE.exercises}</p>)}
     </>)
}

export default Content