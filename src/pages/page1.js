import * as React from 'react'
const data = [
    {name:"Lily",salary:10000},
    {name:"Kris",salary:16000},
    {name:"Bambam",salary:20000},
]
const colours = ["Purple","Orange","Red","Black","Blue"]
const nums = [3,5,4,3,7,8,4,2,7,9,4,32,8,0,5,3,6,9,5]

function mapFunc(value,index) {
    return <li>{value}</li>
}

function myReduceFunc(previous,current,index) {
    return previous + current
}
export default function Page1() {
    let items = colours.map((value,index) =>  <li>{value}</li> )
    let sum = nums.reduce((p,c) => p+c)
    let people = data.map(p => <li>{p.name} {p.salary}</li>)
    let totalSalary = data.reduce((p,c) => p + c.salary,0)

    return (
        <>
            <h1>Hello</h1>
            <p>Total Salary {totalSalary}</p>
            <ul>
                {people}
            </ul>
        </>
    )
}

