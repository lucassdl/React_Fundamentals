import style from "./Cars.module.css";

const Cars = ({car}) => {
  return (
    <div>
        <div>
            <h2 className={style.car_header}>{car.name}</h2>
            <p className={style.car_paragraph}>{car.fabricante}</p>
            <p className={style.car_paragraph}>{car.ano}</p>
            <p className={style.car_paragraph}>{car.km} KM</p>
        </div>
    </div>
  )
}

export default Cars