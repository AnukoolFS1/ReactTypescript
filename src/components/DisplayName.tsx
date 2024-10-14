type props = {name:string, profession: string, age:number}
const Display = ({name, profession, age}:props) => {


    return <h1> Hello, my name is {name}, I am a {age} years old and I am a {profession}</h1>
}

export default Display