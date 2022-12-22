import './App.css';
// import data from './component/Datacomponent';
// import elephant from "./images/elephant.jpeg";

// const imageData = ()=>{
//   let data = [
//     {
//       id:1,
//       img:elephant
//     },
//     {
//       id:2,
//       img:elephant
//     },
//     {
//       id:3,
//       img:elephant
//     },
//     {
//       id:4,
//       img:elephant
//     }
//   ]
//   return data;
// }

function App(props) {
  // code here
  // console.log(prop)
  return (
    <div className='app'>
      <h1>Kalvium Gallary</h1>
      <div className='img'>
        {props.dat.map((abd)=>{
          return <img src={abd.img} alt=""/>
        })}
      </div>
    </div>
  )
}

export default App;
