
function Content ({cCourse}){
    return(
    <>
    {cCourse.parts.map(cE => {
        return (
            <div key={cE.id}>
            <p>{cE.name} {cE.exercises}</p>
            </div>
        )
    })}
     </>
     )
}

export default Content