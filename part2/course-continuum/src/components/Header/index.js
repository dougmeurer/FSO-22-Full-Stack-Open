import Content from "../Content"
import Total from "../Total"

function Header ({courses}) {
    return (<div>
        {courses.map((cCourse, i) => {
            return (<div key={cCourse.id}>
                <h1>{cCourse.name}</h1>
                <Content cCourse={cCourse}/>
                <Total cCourse={cCourse}/>
            </div>)
        })}
    </div>)
}
export default Header